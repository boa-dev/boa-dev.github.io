import {
  ConformanceState,
  FilterOption,
  ResultInfo,
  SortOption,
  SpecEdition,
  SuiteResult,
  TestOutcome,
  TestResult,
  TestStats,
  UrlState,
  VersionedStats,
  VersionItem,
} from "@site/src/components/conformance/types";
import { url } from "node:inspector";

// Take a search param and create a state object
export function createUrlState(search: string): UrlState {
  const params = new URLSearchParams(search);
  console.log(`testPath: ${params.get("testPath")}`);
  return {
    versionTag: params.get("version") ?? undefined,
    testPath: params.get("testPath")?.split("/") ?? undefined,
    selectedTest: params.get("selectedTest") ?? undefined,
  };
}

export function updateInitialConformanceState(
  urlState: UrlState,
  conformanceState: ConformanceState,
) {
  if (conformanceState) return conformanceState;
  const selectedTest = urlState.testPath ? urlState.selectedTest : undefined;
  const tagName =
    !urlState.versionTag && urlState.testPath ? "main" : urlState.versionTag;
  const fetchUrl =
    tagName === "main"
      ? `https://raw.githubusercontent.com/boa-dev/data/main/test262/refs/heads/main/latest.json`
      : `https://raw.githubusercontent.com/boa-dev/data/main/test262/refs/tags/${tagName}/latest.json`;

  const testPath = urlState.testPath || [];
  if (!tagName && testPath.length == 0 && !selectedTest)
    return conformanceState;
  return {
    version: { tagName, fetchUrl },
    testPath: [tagName, ...testPath],
    ecmaScriptVersion: undefined,
    sortOption: availableSortingOptions[0].id,
    selectedTest: selectedTest,
  };
}

export function createSearchParams(
  version: VersionItem,
  testPath?: string[],
  selectedTest?: string,
) {
  const search = new URLSearchParams();
  search.append("version", version.tagName);
  if (testPath && testPath.length > 1) {
    search.append("testPath", testPath.slice(1).join("/"));
  }
  if (selectedTest) {
    search.append("selectedTest", selectedTest);
  }
  return search.toString();
}

// Creates the state object from provided args
export function createState(
  version: VersionItem,
  testPath?: string[],
  ecmaScriptVersion?: string,
  sortOption?: string,
  filterOption?: FilterOption,
  selectedTest?: string,
): ConformanceState {
  testPath = testPath ? testPath : [version.tagName];
  sortOption = sortOption ? sortOption : availableSortingOptions[0].id;
  ecmaScriptVersion = ecmaScriptVersion ? ecmaScriptVersion : "";
  return {
    version,
    testPath,
    ecmaScriptVersion,
    sortOption,
    filterOption,
    selectedTest,
  };
}

export const availableSortingOptions: SortOption[] = [
  {
    id: "alpha",
    name: "Alphabetical",
    callback: (a, b) => a.name.localeCompare(b.name),
  },
  {
    id: "reverse",
    name: "Reverse Alpha",
    callback: (a, b) => -a.name.localeCompare(b.name),
  },
  {
    id: "most-passed",
    name: "Most Passed",
    callback: (a, b) => b.stats.passed - a.stats.passed,
  },
  {
    id: "least-passed",
    name: "Least Passed",
    callback: (a, b) => a.stats.passed - b.stats.passed,
  },
  {
    id: "most-pass-percentage",
    name: "Most Passed (%)",
    callback: (a, b) => {
      const p1 = a.stats.passed / a.stats.total;
      const p2 = b.stats.passed / b.stats.total;
      return p1 === p2 ? b.stats.total - a.stats.total : p2 - p1;
    },
  },
  {
    id: "least-pass-percentage",
    name: "Least Passed (%)",
    callback: (a, b) => {
      const p1 = a.stats.passed / a.stats.total;
      const p2 = b.stats.passed / b.stats.total;
      return p1 === p2 ? b.stats.total - a.stats.total : p1 - p2;
    },
  },
  {
    id: "most-ignored",
    name: "Most Ignored",
    callback: (a, b) => b.stats.ignored - a.stats.ignored,
  },
  {
    id: "least-ignored",
    name: "Least Ignored",
    callback: (a, b) => a.stats.ignored - b.stats.ignored,
  },
  {
    id: "most-fail",
    name: "Most Failed",
    callback: (a, b) =>
      b.stats.total -
      (b.stats.passed + b.stats.ignored) -
      (a.stats.total - (a.stats.passed + a.stats.ignored)),
  },
  {
    id: "least-fail",
    name: "Least Failed",
    callback: (a, b) =>
      a.stats.total -
      (a.stats.passed + a.stats.ignored) -
      (b.stats.total - (b.stats.passed + b.stats.ignored)),
  },
  {
    id: "most-fail-percentage",
    name: "Most Failed (%)",
    callback: (a, b) => {
      const p1 = (b.stats.passed + b.stats.ignored) / b.stats.total;
      const p2 = (a.stats.passed + a.stats.ignored) / a.stats.total;
      return p2 === p1 ? b.stats.total - a.stats.total : p2 - p1;
    },
  },
  {
    id: "least-fail-percentage",
    name: "Least Failed (%)",
    callback: (a, b) => {
      const p1 = (b.stats.passed + b.stats.ignored) / b.stats.total;
      const p2 = (a.stats.passed + a.stats.ignored) / a.stats.total;
      return p2 === p1 ? b.stats.total - a.stats.total : p1 - p2;
    },
  },
];

// Interface for the http response of boa_tester's `ResultInfo`
interface HttpResultInfo {
  c: string;
  u: string;
  r: HttpSuiteResult;
}

// Function for converting an http response of boa_tester's `ResultInfo` to ResultInfo
export function mapToResultInfo(
  version: string,
  unmappedValue: HttpResultInfo,
): ResultInfo {
  return {
    version,
    commit: unmappedValue.c,
    test262Commit: unmappedValue.u,
    results: mapToSuiteResult(unmappedValue.r),
  };
}

// Interface for the http response of boa_tester's `SuiteResult`
interface HttpSuiteResult {
  n: string;
  a: HttpStatistics;
  av?: HttpVersionedStatistics;
  s?: HttpSuiteResult[];
  t?: HttpTestResult[];
  f?: string[];
}

// Function for converting an http response of boa_tester's `SuiteResult` to SuiteResult
export function mapToSuiteResult(unmappedValue: HttpSuiteResult): SuiteResult {
  const suiteResult = {
    name: unmappedValue.n,
    stats: mapToTestStats(unmappedValue.a),
  };

  if (unmappedValue.av) {
    suiteResult["versionedStats"] = mapToVersionedStats(unmappedValue.av);
  }

  if (unmappedValue.s) {
    suiteResult["suites"] = unmappedValue.s.map((suite) =>
      mapToSuiteResult(suite),
    );
  }

  if (unmappedValue.t) {
    suiteResult["tests"] = unmappedValue.t.map((test) => mapToTestResult(test));
  }

  if (unmappedValue.f) {
    suiteResult["features"] = Array(unmappedValue.f);
  }

  return suiteResult;
}

// Interface for the http response of boa_tester's `Statistics`
interface HttpStatistics {
  t: number;
  o: number;
  i: number;
  p: number;
}

// Function for converting an http response of boa_tester's `Statistics` to `TestStats`
export function mapToTestStats(unmappedValue: HttpStatistics): TestStats {
  return {
    total: unmappedValue.t,
    passed: unmappedValue.o,
    ignored: unmappedValue.i,
    panic: unmappedValue.p,
  };
}

// Interface for the http response of boa_tester's versioned `Statistics`
interface HttpVersionedStatistics {
  es5: HttpStatistics;
  es6: HttpStatistics;
  es7: HttpStatistics;
  es8: HttpStatistics;
  es9: HttpStatistics;
  es10: HttpStatistics;
  es11: HttpStatistics;
  es12: HttpStatistics;
  es13: HttpStatistics;
}

// Function for converting an http response of boa_tester's versioned `Statistics` to `VersionedStats`
export function mapToVersionedStats(
  unmappedValue: HttpVersionedStatistics,
): VersionedStats {
  return {
    es5: mapToTestStats(unmappedValue.es5),
    es6: mapToTestStats(unmappedValue.es6),
    es7: mapToTestStats(unmappedValue.es7),
    es8: mapToTestStats(unmappedValue.es8),
    es9: mapToTestStats(unmappedValue.es9),
    es10: mapToTestStats(unmappedValue.es10),
    es11: mapToTestStats(unmappedValue.es11),
    es12: mapToTestStats(unmappedValue.es12),
    es13: mapToTestStats(unmappedValue.es13),
  };
}

// Interface for the http response of boa_tester's `TestResult`
interface HttpTestResult {
  n: string;
  v: number | string;
  s: boolean | string;
  r: string;
}

// Function for converting an http response of boa_tester's `TestResult` to TestResult
export function mapToTestResult(unmappedValue: HttpTestResult): TestResult {
  return {
    name: unmappedValue.n,
    edition: mapToSpecEditionEnum(unmappedValue.v),
    strict: Boolean(unmappedValue.s),
    result: mapToTestOutcomeEnum(unmappedValue.r),
  };
}

export function mapToSpecEditionEnum(
  unmappedValue: number | string,
): SpecEdition {
  switch (Number(unmappedValue)) {
    case 5:
      return SpecEdition.es5;
    case 6:
      return SpecEdition.es6;
    case 7:
      return SpecEdition.es7;
    case 8:
      return SpecEdition.es8;
    case 9:
      return SpecEdition.es9;
    case 10:
      return SpecEdition.es10;
    case 11:
      return SpecEdition.es11;
    case 12:
      return SpecEdition.es12;
    case 13:
      return SpecEdition.es13;
    default:
      return SpecEdition.ESNext;
  }
}

export function mapToTestOutcomeEnum(unmappedValue: string): TestOutcome {
  switch (String(unmappedValue)) {
    case "O":
      return TestOutcome.Passed;
    case "I":
      return TestOutcome.Ignored;
    case "P":
      return TestOutcome.Panic;
    default:
      return TestOutcome.Failed;
  }
}
