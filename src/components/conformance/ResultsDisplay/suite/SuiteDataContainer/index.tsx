import React from "react";
import TestGrid from "../TestGrid";
import TestViewPort from "../TestViewPort";
import { SuiteResult } from "@site/src/components/conformance/types";

import styles from "./styles.module.css";

type SuiteDataProps = {
    suite: SuiteResult
    esFlag: string | null,
    t262Path: string,
}

export default function SuiteDataContainer(props: SuiteDataProps): JSX.Element {
    const [selectedTest, setSelectedTest] = React.useState<string | null>(null);

    const selectTest = (testName: string) => {
        setSelectedTest(testName)
    }

    // Add a TestViewer to look up and display the test262.
    return (
        <div className={styles.dataContainer}>
            <DataCard {...props} selectTest={selectTest} />
            {selectedTest ? <TestViewPort testName={selectedTest} t262Path={props.t262Path} /> : null }
        </div>
    )
}


type DataCardProps = {
    suite: SuiteResult,
    esFlag: string | null,
    selectTest: (string) => void,
}

function DataCard(props: DataCardProps): JSX.Element {
    const cardBodyClass = "card__body " + styles.gridStyle;
    return (
        <div className={styles.dataCardContainer}>
            <div className="card">
                <div className="card__header">
                    <h3>{props.suite.name}</h3>
                </div>
                <div className={cardBodyClass}>
                    <TestGrid tests={props.suite.tests} esFlag={props.esFlag} selectTest={props.selectTest} />
                </div>
            </div>
        </div>
    )
}
