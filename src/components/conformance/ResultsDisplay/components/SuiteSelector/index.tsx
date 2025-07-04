import React from "react";
import {
  ConformanceState,
  FilterOption,
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

export default function SuiteSelector(props: SelectorProps): React.ReactNode {
  const option: SortOption[] = availableSortingOptions.filter(
    (v) => v.id === props.state.sortOption,
  );
  return (
    <div className={styles.suiteSelector}>
      {props.suites
        .toSorted(option[0].callback)
        .filter((suite) => {
          const stats: TestStats =
            suite.versionedStats?.[props.state.ecmaScriptVersion] ??
            suite.stats;
          return stats.total !== 0;
        })
        .map((suite) => {
          return (
            <SuiteItem
              key={suite.name}
              suite={suite}
              esFlag={props.state.ecmaScriptVersion}
              filterOption={props.state.filterOption ?? FilterOption.None}
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
  filterOption: FilterOption;
  navigateToSuite: (string) => void;
};

function SuiteItem(props: SuiteItemProps): React.ReactNode {
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
          props.esFlag
            ? (props.suite.versionedStats?.[props.esFlag] ?? props.suite.stats)
            : props.suite.stats
        }
        filterOption={props.filterOption}
      />
    </div>
  );
}

type StatProps = {
  testResults: TestStats;
  filterOption: FilterOption;
};

function SuiteStatistics({
  testResults,
  filterOption,
}: StatProps): React.ReactNode {
  const [filter, setFilter] = React.useState(filterOption);

  React.useEffect(() => {
    setFilter(filterOption);
  }, [filterOption]);

  let passed =
    filter == FilterOption.None || filter == FilterOption.Passed
      ? testResults.passed
      : 0;

  let ignored =
    filter == FilterOption.None || filter == FilterOption.Ignored
      ? testResults.ignored
      : 0;

  let failed =
    filter == FilterOption.None || filter == FilterOption.Failed
      ? `${testResults.total - testResults.passed - testResults.ignored} (${testResults.panic}\u26A0)`
      : 0;

  return (
    <div className={styles.suiteCardResults}>
      <p>
        <span style={{ color: "var(--ifm-color-success)" }}>{passed} </span>/{" "}
        <span style={{ color: "var(--ifm-color-warning)" }}>{ignored} </span>/{" "}
        <span style={{ color: "var(--ifm-color-danger)" }}>{failed}</span>
      </p>
    </div>
  );
}
