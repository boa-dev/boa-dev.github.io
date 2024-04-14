import React from "react";
import { SuiteResult } from "@site/src/components/conformance/types";

import styles from "./styles.module.css";

type SelectorProps = {
  suites: SuiteResult[];
  esFlag: string | null;
  navigateToSuite: (string) => void;
};

export default function SuiteSelector(props: SelectorProps): JSX.Element {
  return (
    <div className={styles.suiteSelector}>
      {props.suites
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((suite) => {
          return (
            <SuiteItem
              key={suite.name}
              suite={suite}
              esFlag={props.esFlag}
              navigateToSuite={props.navigateToSuite}
            />
          );
        })}
    </div>
  );
}

type SuiteItemProps = {
  suite: SuiteResult;
  esFlag: string | null;
  navigateToSuite: (string) => void;
};

function SuiteItem(props: SuiteItemProps): JSX.Element {
  return (
    <div
      className={styles.suiteCard}
      onClick={() => props.navigateToSuite(props.suite.name)}
    >
      <div className={styles.suiteCardTitle}>
        <b>{props.suite.name}</b>
      </div>
      <SuiteStatistics
        testResults={
          props.esFlag && props.suite.versionedStats[props.esFlag]
            ? props.suite.versionedStats[props.esFlag]
            : props.suite.stats
        }
      />
    </div>
  );
}

function SuiteStatistics(props): JSX.Element {
  return (
    <div className={styles.suiteCardResults}>
      <p>
        <span style={{ color: "var(--ifm-color-success)" }}>
          {props.testResults.passed}{" "}
        </span>
        /{" "}
        <span style={{ color: "var(--ifm-color-warning)" }}>
          {props.testResults.ignored}{" "}
        </span>
        /{" "}
        <span
          style={{ color: "var(--ifm-color-danger)" }}
        >{`${props.testResults.total - props.testResults.passed - props.testResults.ignored} (${props.testResults.panic}\u26A0)`}</span>
      </p>
    </div>
  );
}
