import React from "react";
import {
  ConformanceState,
  SortOption,
  SuiteResult,
  TestStats,
} from "@site/src/components/conformance/types";

import styles from "./styles.module.css";
import { availableSortingOptions } from "../../../utils";

type SelectorProps = {
  state: ConformanceState;
  suites: SuiteResult[];
  navigateToSuite: (string) => void;
};

export default function SuiteSelector(props: SelectorProps): JSX.Element {
  const option: SortOption[] = availableSortingOptions.filter(
    (v) => v.id === props.state.sortOption,
  );
  return (
    <div className={styles.suiteSelector}>
      {props.suites
        .sort(option[0].callback)
        .filter((suite) => {
          const stats: TestStats =
            suite.versionedStats[props.state.ecmaScriptVersion] ?? suite.stats;
          return stats.total !== 0;
        })
        .map((suite) => {
          return (
            <SuiteItem
              key={suite.name}
              suite={suite}
              esFlag={props.state.ecmaScriptVersion}
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
