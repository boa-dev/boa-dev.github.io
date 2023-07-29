import { ResultInfo, SpecEdition, SuiteResult, TestOutcome, TestResult, TestStats, VersionedStats } from "@site/src/pages/conformance/types"

// Function for converting an http response of boa_tester's `ResultInfo` to ResultInfo
export function mapToResultInfo(unmappedValue: any): ResultInfo {
    return {
        commit: unmappedValue.c,
        test262Commit: unmappedValue.u,
        results: mapToSuiteResult(unmappedValue.r)
    }
}

export function mapToSuiteResult(unmappedValue: any): SuiteResult {
    let suiteResult = {
        name: unmappedValue.n,
        stats: mapToTestStats(unmappedValue.a),
    };

    if (unmappedValue.av) {
        suiteResult["versionedStats"] = mapToVersionedStats(unmappedValue.av);
    }

    if (unmappedValue.s) {
        suiteResult["suites"] = unmappedValue.s.map(suite=>mapToSuiteResult(suite))
    }

    if (unmappedValue.t) {
        suiteResult["tests"] = unmappedValue.t.map(test=>mapToTestResult(test))
    }

    if (unmappedValue.f) {
        suiteResult["features"] = Array(unmappedValue.f)
    }

    return suiteResult
}

// Function for converting an http response of boa_tester's `Statistics` to `TestStats`
export function mapToTestStats(unmappedValue: any): TestStats {
    return {
        total: unmappedValue.t,
        passed: unmappedValue.o,
        ignored: unmappedValue.i,
        panic: unmappedValue.p
    }
}

export function mapToVersionedStats(unmappedValue: any): VersionedStats {
    return {
        es5: mapToTestStats(unmappedValue.es5),
        es6: mapToTestStats(unmappedValue.es6),
        es7: mapToTestStats(unmappedValue.es7),
        es8: mapToTestStats(unmappedValue.es8),
        es9: mapToTestStats(unmappedValue.es9),
        es10: mapToTestStats(unmappedValue.es10),
        es11: mapToTestStats(unmappedValue.es11),
        es12: mapToTestStats(unmappedValue.es12),
        es13: mapToTestStats(unmappedValue.es13)
    }
}

export function mapToTestResult(unmappedValue: any): TestResult {
    return {
        name: unmappedValue.n,
        edition: mapToSpecEditionEnum(unmappedValue.v),
        strict: Boolean(unmappedValue.s),
        result: mapToTestOutcomeEnum(unmappedValue.r)
    }
}

export function mapToSpecEditionEnum(unmappedValue: any): SpecEdition {
    switch (Number(unmappedValue)) {
        case 5:
            return SpecEdition.es5
        case 6:
            return SpecEdition.es6
        case 7:
            return SpecEdition.es7
        case 8:
            return SpecEdition.es8
        case 9:
            return SpecEdition.es9
        case 10:
            return SpecEdition.es10
        case 11:
            return SpecEdition.es11
        case 12:
            return SpecEdition.es12
        case 13:
            return SpecEdition.es13
        default:
            return SpecEdition.ESNext
    }
}

export function mapToTestOutcomeEnum(unmappedValue: any): TestOutcome {
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
