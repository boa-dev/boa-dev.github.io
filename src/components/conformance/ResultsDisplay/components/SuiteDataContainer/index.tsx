import React from "react";
import TestsGrid from "./cards/TestGrid";
import TestViewer from "./cards/TestViewer";
import { SuiteResult } from "@site/src/components/conformance/types";

import styles from "./styles.module.css";

type SuiteDataProps = {
  suite: SuiteResult;
  esFlag: string | null;
  t262Path: string;
};

export default function SuiteDataContainer(props: SuiteDataProps): JSX.Element {
  const [selectedTest, setSelectedTest] = React.useState<string | null>(null);

  // Unselect a test if the underlying test262 path has been changed.
  React.useEffect(() => {
    setSelectedTest(null);
  }, [props.t262Path]);

  // Set the user's selected test to be displayed in the ViewPort.
  const selectTest = (testName: string) => {
    setSelectedTest(testName);
  };

  const clearTest = () => {
    setSelectedTest(null);
  };

  // Add a TestViewer to look up and display the test262.
  return (
    <div className={styles.dataContainer}>
      {selectedTest ? (
        <TestViewer
          testName={selectedTest}
          t262Path={props.t262Path}
          backToGrid={() => clearTest()}
        />
      ) : (
        <TestsGrid {...props} selectTest={selectTest} />
      )}
    </div>
  );
}
