import React from "react";
import SuiteSelector from "../SuiteSelector";
import SuiteDataContainer from "../SuiteDataContainer";
import { SuiteResult } from "@site/src/components/conformance/types";

import styles from "./styles.module.css";

type SuiteDisplayProps = {
  currentSuite: SuiteResult;
  esFlag: string | null;
  t262Path: string;
  navigateToSuite: (string) => void;
};

export default function SuiteDisplay(props: SuiteDisplayProps): JSX.Element {
  return (
    <div className={styles.suiteDisplay}>
      {props.currentSuite.suites ? (
        <SuiteSelector
          suites={props.currentSuite.suites}
          esFlag={props.esFlag}
          navigateToSuite={props.navigateToSuite}
        />
      ) : null}
      {props.currentSuite.tests ? (
        <SuiteDataContainer
          suite={props.currentSuite}
          esFlag={props.esFlag}
          t262Path={props.t262Path}
        />
      ) : null}
    </div>
  );
}
