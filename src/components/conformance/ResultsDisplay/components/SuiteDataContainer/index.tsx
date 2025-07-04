import React from "react";
import TestsGrid from "./cards/TestGrid";
import TestViewer from "./cards/TestViewer";
import {
  ConformanceState,
  SuiteResult,
} from "@site/src/components/conformance/types";

import styles from "./styles.module.css";

type SuiteDataProps = {
  suite: SuiteResult;
  state: ConformanceState;
  t262Path: string;
  setSelectedTest: (string) => void;
};

export default function SuiteDataContainer(
  props: SuiteDataProps,
): React.ReactNode {
  // Set the user's selected test to be displayed in the ViewPort.
  const selectTest = (testName: string) => {
    props.setSelectedTest(testName);
  };

  const clearTest = () => {
    props.setSelectedTest(undefined);
  };

  // Add a TestViewer to look up and display the test262.
  return (
    <div className={styles.dataContainer}>
      {props.state.selectedTest ? (
        <TestViewer
          testName={props.state.selectedTest}
          t262Path={props.t262Path}
          backToGrid={() => clearTest()}
        />
      ) : (
        <TestsGrid {...props} selectTest={selectTest} />
      )}
    </div>
  );
}
