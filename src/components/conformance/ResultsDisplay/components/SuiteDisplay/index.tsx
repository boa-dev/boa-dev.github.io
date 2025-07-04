import React from "react";
import SuiteSelector from "../SuiteSelector";
import SuiteDataContainer from "../SuiteDataContainer";
import {
  ConformanceState,
  SuiteResult,
} from "@site/src/components/conformance/types";

import styles from "./styles.module.css";

type SuiteDisplayProps = {
  currentSuite: SuiteResult;
  state: ConformanceState;
  t262Path: string;
  navigateToSuite: (string) => void;
  setSelectedTest: (string) => void;
};

export default function SuiteDisplay(
  props: SuiteDisplayProps,
): JSX.Element {
  return (
    <div className={styles.suiteDisplay}>
      {props.currentSuite.suites ? (
        <SuiteSelector
          state={props.state}
          suites={props.currentSuite.suites}
          navigateToSuite={props.navigateToSuite}
        />
      ) : null}
      {props.currentSuite.tests ? (
        <SuiteDataContainer
          state={props.state}
          suite={props.currentSuite}
          t262Path={props.t262Path}
          setSelectedTest={props.setSelectedTest}
        />
      ) : null}
    </div>
  );
}
