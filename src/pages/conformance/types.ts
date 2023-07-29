export type VersionItem = {
    tagName: string,
    fetchUrl: string,
}

export type TestStats = {
    total: number,
    passed: number,
    ignored: number,
    panic: number
}

export type ResultInfo = {
    commit: string,
    test262Commit: string,
    results: SuiteResult
}

export type SuiteResult = {
    name: string,
    stats: TestStats,
    versionedStats?: VersionedStats,
    suites?: SuiteResult[],
    tests?: TestResult[],
    features?: [],
}

export type VersionedStats = {
    es5: TestStats,
    es6: TestStats,
    es7: TestStats,
    es8: TestStats,
    es9: TestStats,
    es10: TestStats,
    es11: TestStats,
    es12: TestStats,
    es13: TestStats,
}

export type TestResult = {
    name: string,
    edition: SpecEdition,
    strict: boolean,
    result: TestOutcome,
}

export enum TestOutcome {
    Passed,
    Ignored,
    Failed,
    Panic,
}

export enum SpecEdition {
    es5 = 5,
    es6,
    es7,
    es8,
    es9,
    es10,
    es11,
    es12,
    es13,
    ESNext,
}
