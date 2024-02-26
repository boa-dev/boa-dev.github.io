import React from "react";
import {
  SpecEdition,
  TestOutcome,
  TestResult,
  SuiteResult,
} from "@site/src/components/conformance/types";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type TestsGridProps = {
  suite: SuiteResult;
  esFlag: string | null;
  selectTest: (string) => void;
};

export default function TestsGrid(props: TestsGridProps): JSX.Element {
  const cardBodyClass = "card__body " + styles.gridStyle;

  return (
    <div className={styles.testGridCard}>
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{props.suite.name}</Heading>
        </div>
        <div className={cardBodyClass}>
          <Grid
            tests={props.suite.tests}
            esFlag={props.esFlag}
            selectTest={props.selectTest}
          />
        </div>
      </div>
    </div>
  );
}

type GridProps = {
  tests: TestResult[];
  esFlag: string | null;
  selectTest: (string) => void;
};

function Grid(props: GridProps): JSX.Element {
  return (
    <>
      {props.esFlag
        ? props.tests
            .filter((test) => test.edition <= SpecEdition[props.esFlag])
            .map((test) => {
              return (
                <GridItem
                  key={test.strict ? test.name + "-strict" : test.name}
                  test={test}
                  selectTest={props.selectTest}
                />
              );
            })
        : props.tests.map((test) => {
            return (
              <GridItem
                key={test.strict ? test.name + "-strict" : test.name}
                test={test}
                selectTest={props.selectTest}
              />
            );
          })}
    </>
  );
}

type GridItemProps = {
  test: TestResult;
  selectTest: (string) => void;
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
        title={
          props.test.strict
            ? "(strict) " + props.test.name + ".js"
            : props.test.name + ".js"
        }
      />
    </>
  );
}
