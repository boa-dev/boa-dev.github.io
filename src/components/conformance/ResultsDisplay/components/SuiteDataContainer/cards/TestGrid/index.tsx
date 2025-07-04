import React from "react";
import {
  SpecEdition,
  TestOutcome,
  TestResult,
  SuiteResult,
  ConformanceState,
  FilterOption,
} from "@site/src/components/conformance/types";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import clsx from "clsx";

type TestsGridProps = {
  state: ConformanceState;
  suite: SuiteResult;
  selectTest: (string) => void;
};

export default function TestsGrid(props: TestsGridProps): JSX.Element {
  const [hoverName, setHoverName] = React.useState<undefined | string>();
  const cardBodyClass = "card__body " + styles.gridStyle;

  const title = hoverName ? "Test: " + hoverName : "Suite: " + props.suite.name;

  return (
    <div className={styles.testGridCard}>
      <div className="card">
        <div className={clsx("card__header", styles.testGridHeader)}>
          <Heading as="h3">{title}</Heading>
        </div>
        <div className={cardBodyClass}>
          <Grid
            tests={props.suite.tests}
            esFlag={props.state.ecmaScriptVersion}
            filterOption={props.state.filterOption}
            selectTest={props.selectTest}
            setHoverValue={(name) => setHoverName(name)}
          />
        </div>
      </div>
    </div>
  );
}

type GridProps = {
  tests: TestResult[];
  esFlag: string | null;
  filterOption: FilterOption;
  selectTest: (test: string) => void;
  setHoverValue: (test: string | undefined) => void;
};

function applyFilter(filter: FilterOption, outcome: TestOutcome): boolean {
  switch (filter) {
    case FilterOption.Passed:
      return outcome == TestOutcome.Passed;
    case FilterOption.Ignored:
      return outcome == TestOutcome.Ignored;
    case FilterOption.Failed:
      return outcome == TestOutcome.Failed || outcome == TestOutcome.Panic;
    default:
      return true;
  }
}

function Grid(props: GridProps): JSX.Element {
  return (
    <>
      {props.esFlag
        ? props.tests
            .filter((test) => test.edition <= SpecEdition[props.esFlag])
            .filter((test) => applyFilter(props.filterOption, test.result))
            .map((test) => {
              return (
                <GridItem
                  key={test.strict ? test.name + "-strict" : test.name}
                  test={test}
                  selectTest={props.selectTest}
                  setHoverValue={props.setHoverValue}
                />
              );
            })
        : props.tests
            .filter((test) => applyFilter(props.filterOption, test.result))
            .map((test) => {
              return (
                <GridItem
                  key={test.strict ? test.name + "-strict" : test.name}
                  test={test}
                  selectTest={props.selectTest}
                  setHoverValue={props.setHoverValue}
                />
              );
            })}
    </>
  );
}

type GridItemProps = {
  test: TestResult;
  selectTest: (test: string) => void;
  setHoverValue: (test: string | undefined) => void;
};

function GridItem(props: GridItemProps): JSX.Element {
  let testResult: string;
  switch (props.test.result) {
    case TestOutcome.Passed:
      testResult = styles.testGridItem + " " + styles.passed;
      break;
    case TestOutcome.Ignored:
      testResult = styles.testGridItem + " " + styles.ignored;
      break;
    default:
      testResult = styles.testGridItem + " " + styles.failed;
  }

  return (
    <>
      <div
        className={testResult}
        onClick={() => props.selectTest(props.test.name + ".js")}
        onMouseEnter={() => props.setHoverValue(props.test.name + ".js")}
        onMouseLeave={() => props.setHoverValue(undefined)}
        aria-label={props.test.name}
        title={
          props.test.strict
            ? "(strict) " + props.test.name + ".js"
            : props.test.name + ".js"
        }
      />
    </>
  );
}
