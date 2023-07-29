import React from "react";
import TestGrid from "../TestGrid";
import { SuiteResult } from "@site/src/pages/conformance/types";

import styles from "./styles.module.css";

type SuiteDataProps = {
    suite: SuiteResult
    esFlag: string | null
}

export default function SuiteDataContainer(props: SuiteDataProps): JSX.Element {

    // Add a TestViewer to look up and display the test262.
    return (
        <div className={styles.dataContainer}>
            <DataCard {...props} />
            {/*TODO: Add a TestViewer here */}
        </div>
    )
}


type DataCardProps = {
    suite: SuiteResult
    esFlag: string | null
}

function DataCard(props: DataCardProps): JSX.Element {

    return (
        <div className={styles.dataCardContainer}>
            <div className="card">
                <div className="card__header">
                    <h3>{props.suite.name}</h3>
                </div>
                <div className="card__body" style={{overflowY: "auto", maxHeight: "35em"}}>
                    <TestGrid tests={props.suite.tests} esFlag={props.esFlag} />
                </div>
            </div>
        </div>
    )
}


