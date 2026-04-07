// The main global state of the conformance page.
//
// This state is fed into the History object and dictates
// what renders.
export type ConformanceState = {
  version: VersionItem;
  testPath: string[];
  ecmaScriptVersion: string | undefined;
  sortOption: string;
  filterOption: FilterOption;
  selectedTest: string | undefined;
};

export type UrlState = {
  versionTag: string | undefined;
  testPath: string[] | undefined;
  selectedTest: string | undefined;
};

export type VersionItem = {
  tagName: string;
  fetchUrl: string;
};

export type SortOption = {
  id: string;
  name: string;
  callback: (a: SuiteResult, b: SuiteResult) => number;
};

export enum FilterOption {
  None = "none",
  Passed = "passed",
  Failed = "failed",
  Ignored = "ignored",
}

// The below types are specific to test result types.

export type ResultInfo = {
  version: string;
  commit: string;
  test262Commit: string;
  results: SuiteResult;
};

export type SuiteResult = {
  name: string;
  stats: TestStats;
  versionedStats?: VersionedStats;
  suites?: SuiteResult[];
  tests?: TestResult[];
  features?: string[];
};

export type VersionedStats = {
  [edition: string]: TestStats;
};

export type TestStats = {
  total: number;
  passed: number;
  ignored: number;
  panic: number;
};

export type TestResult = {
  name: string;
  edition: number;
  strict: boolean;
  result: TestOutcome;
};

export enum TestOutcome {
  Passed,
  Ignored,
  Failed,
  Panic,
}
