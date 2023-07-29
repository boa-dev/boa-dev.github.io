import React from "react";
import SuiteSelector from "../SuiteSelector"
import SuiteDataContainer from "../SuiteDataContainer";
import { SuiteResult } from "@site/src/pages/conformance/types";

import styles from "./styles.module.css";

type SuiteDisplayProps = {
    currentSuite: SuiteResult,
    esFlag: string | null,
    navigateToSuite: (string) => void,
}

export default function SuiteDisplay(props: SuiteDisplayProps): JSX.Element {

    // TODO: Remove the below -> Primarily serves for debugging/visibilty in console.
    React.useEffect(()=> {
        console.log(props.currentSuite)
    }, [props.currentSuite])

    return (
        <div className={styles.suiteDisplay}>
            {props.currentSuite.suites ? <SuiteSelector suites={props.currentSuite.suites} esFlag={props.esFlag} navigateToSuite={props.navigateToSuite}/>: null}
            {props.currentSuite.tests ? <SuiteDataContainer suite={props.currentSuite} esFlag={props.esFlag} /> : null}
        </div>
    )
}


