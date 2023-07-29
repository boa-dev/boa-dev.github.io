import React from "react";
import { SuiteResult } from "@site/src/pages/conformance/types";

import styles from "./styles.module.css";

type SelectorProps = {
    suites: SuiteResult[]
    navigateToSuite: (string) => void,
}

export default function SuiteSelector(props: SelectorProps): JSX.Element {
    return (
        <div className={styles.suiteSelector}>
            {props.suites.map((suite)=>{
                return <SuiteItem key={suite.name} suite={suite} navigateToSuite={props.navigateToSuite} />
            })}
        </div>
    )
}

type SuiteItemProps = {
    suite: SuiteResult
    navigateToSuite: (string) => void,
}

function SuiteItem(props: SuiteItemProps): JSX.Element {

    return (
        <div className={styles.suiteCard} onClick={()=>props.navigateToSuite(props.suite.name)}>
            <div className={styles.suiteCardTitle}><b>{props.suite.name}</b></div>
            <div className={styles.suiteCardResults}>
                <p>
                    <span style={{color:"var(--ifm-color-success)"}}>{props.suite.stats.passed} </span>
                    / <span style={{color:"var(--ifm-color-warning)"}}>{props.suite.stats.ignored} </span>
                    / <span style={{color:"var(--ifm-color-danger)"}}>{`${(props.suite.stats.total - props.suite.stats.passed - props.suite.stats.ignored)} (${props.suite.stats.panic}\u26A0)`}</span>
                </p>
            </div>
        </div>
    )
}
