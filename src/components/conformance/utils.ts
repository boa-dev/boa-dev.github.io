import {
  ConformanceState,
  ResultInfo,
  SpecEdition,
  SuiteResult,
  TestOutcome,
  TestResult,
  TestStats,
  VersionedStats,
  VersionItem,
} from "@site/src/components/conformance/types";

// Creates the state object from provided args
export function createState(
  version: VersionItem,
  testPath?: string[],
  ecmaScriptVersion?: string,
  selectedTest?: string,
): ConformanceState {
  testPath = testPath ? testPath : [version.tagName];
  return {
    version,
    testPath,
    ecmaScriptVersion,
    selectedTest,
  };
}

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
