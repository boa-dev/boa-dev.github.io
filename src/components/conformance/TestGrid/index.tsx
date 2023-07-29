import React from "react";
import { TestOutcome, TestResult } from "@site/src/pages/conformance/types";

import styles from "./styles.module.css";

type TestGridProps = {
    tests: TestResult[]
}

export default function TestGrid(props: TestGridProps): JSX.Element {
    return (
        <div className={styles.testGrid}>
            {props.tests.map((test)=>{
                return <TestGridItem key={test.strict ? test.name + "-strict" : test.name} test={test} />
            })}
        </div>
    )
}

type TestItemProps = {
    test: TestResult
}

function TestGridItem(props: TestItemProps): JSX.Element {
    let testResult = null;
    switch(props.test.result) {
        case TestOutcome.Passed:
            testResult = styles.testGridItem + " " + styles.passed;
            break;
        case TestOutcome.Ignored:
            testResult = styles.testGridItem + " " + styles.ignored;
            break;
        default:
            testResult = styles.testGridItem + " " + styles.failed;
    };

    return (
        <>
            <div
                className={testResult}
                title={props.test.strict
                    ? "(strict) " + props.test.name + ".js"
                    : props.test.name + ".js"}
                />
        </>
    )
}
