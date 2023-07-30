import React from "react";
import { SpecEdition, TestOutcome, TestResult } from "@site/src/pages/conformance/types";

import styles from "./styles.module.css";

type TestGridProps = {
    tests: TestResult[],
    esFlag: string | null,
    selectTest: (string)=>void,
}

export default function TestGrid(props: TestGridProps): JSX.Element {
    return (
        <>
            {props.esFlag
            ? props.tests.filter(test=>test.edition <= SpecEdition[props.esFlag]).map((test)=>{
                return <TestGridItem key={test.strict ? test.name + "-strict" : test.name} test={test} selectTest={props.selectTest} />
            })
            : props.tests.map((test)=>{
                return <TestGridItem key={test.strict ? test.name + "-strict" : test.name} test={test} selectTest={props.selectTest} />
            })}
        </>
    )
}

type TestItemProps = {
    test: TestResult,
    selectTest: (string)=>void,
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
                onClick={()=>props.selectTest(props.test.name + ".js")}
                title={props.test.strict
                    ? "(strict) " + props.test.name + ".js"
                    : props.test.name + ".js"}
                />
        </>
    )
}
