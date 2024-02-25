import React from "react";
import SuiteDisplay from "./components/SuiteDisplay";
import {
  ResultInfo,
  VersionItem,
  SuiteResult,
  SpecEdition,
} from "@site/src/components/conformance/types";
import { mapToResultInfo } from "@site/src/components/conformance/utils";

import styles from "./styles.module.css";

type ResultsProps = {
  activeVersion: VersionItem;
};

export default function ResultsDisplay(props: ResultsProps): JSX.Element {
  const [activeResults, setActiveResults] = React.useState<ResultInfo | null>(
    null,
  );
  const [testPath, setTestPath] = React.useState<string[]>([
    props.activeVersion.tagName,
  ]);
  const [currentSuite, setCurrentSuite] = React.useState<SuiteResult | null>(
    null,
  );
  const [esVersionFlag, setEsVersionFlag] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetchResults(props.activeVersion).then((data) => {
      const resultInfo = mapToResultInfo(data);
      setActiveResults(resultInfo);
      setCurrentSuite(resultInfo.results);
    });

    setTestPath([props.activeVersion.tagName]);
  }, [props.activeVersion]);

  React.useEffect(() => {
    // Return early if activeResults is null.
    if (!activeResults) return;

    let newSuiteTarget: SuiteResult | null = null;
    for (const target of testPath) {
      if (target === props.activeVersion.tagName) {
        newSuiteTarget = activeResults.results;
      }

      // Suites must exist here for the path value to be valid.
      for (const suite of newSuiteTarget.suites) {
        if (suite.name === target) {
          newSuiteTarget = suite;
        }
      }
    }

    setCurrentSuite(newSuiteTarget);
  }, [testPath]);

  // Fetches the version results
  const fetchResults = async (version: VersionItem) => {
    const response = await fetch(version.fetchUrl);
    return await response.json();
  };

  // Navigates to a suite by adding the SuiteName to the test path array.
  const navigateToSuite = (newSuiteName: string) => {
    setTestPath((testPath) => [...testPath, newSuiteName]);
  };

  // Removes a value or values from the test path array.
  //
  // Used by breadcrumbs for navigation.
  const sliceNavToIndex = (nonInclusiveIndex: number) => {
    setTestPath((testPath) => [...testPath.slice(0, nonInclusiveIndex)]);
  };

  // Sets the ECMAScript version flag value.
  const setEcmaScriptFlag = (flag: string) => {
    const nulledFlag = flag ? flag : null;
    setEsVersionFlag(nulledFlag);
  };

  // Create the t262 URL from testPath with the results commit
  const t262Path = (): string => {
    // NOTE: testPath[0] === activeBoaReleaseTag
    return [
      activeResults.test262Commit,
      "test",
      ...testPath.slice(1, testPath.length),
    ].join("/");
  };

  return (
    <div className={styles.resultsDisplay}>
      <ResultNavigation
        navPath={testPath}
        sliceNavToIndex={sliceNavToIndex}
        setEcmaScriptFlag={setEcmaScriptFlag}
      />
      {activeResults && currentSuite ? (
        <SuiteDisplay
          currentSuite={currentSuite}
          esFlag={esVersionFlag}
          t262Path={t262Path()}
          navigateToSuite={navigateToSuite}
        />
      ) : null}
    </div>
  );
}

type ResultsNavProps = {
  navPath: string[];
  sliceNavToIndex: (number) => void;
  setEcmaScriptFlag: (string) => void;
};

function ResultNavigation(props: ResultsNavProps): JSX.Element {
  return (
    <div className={styles.resultsNav}>
      <EcmaScriptVersionDropdown setEcmaScriptFlag={props.setEcmaScriptFlag} />
      <nav aria-label="breadcrumbs" style={{ padding: "0.25em" }}>
        <ul className="breadcrumbs">
          {props.navPath.map((pathItem, idx, arr) => {
            return (
              <NavItem
                key={pathItem}
                itemName={pathItem}
                index={idx}
                sliceNavToIndex={props.sliceNavToIndex}
                breadcrumbValue={
                  idx + 1 === arr.length
                    ? "breadcrumbs__item breadcrumbs__item--active"
                    : "breadcrumbs__item"
                }
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

type NavItemProps = {
  itemName: string;
  index: number;
  breadcrumbValue: string;
  sliceNavToIndex: (number) => void;
};

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <li className={props.breadcrumbValue}>
      <a
        className={styles.navLink}
        onClick={() => props.sliceNavToIndex(props.index + 1)}
      >
        {props.itemName}
      </a>
    </li>
  );
}

type DropDownProps = {
  setEcmaScriptFlag: (string) => void;
};

function EcmaScriptVersionDropdown(props: DropDownProps): JSX.Element {
  const [dropdownValue, setDropdownValue] = React.useState("");

  const handleVersionSelection = (e) => {
    setDropdownValue(e.target.value);
    props.setEcmaScriptFlag(e.target.value);
  };

  return (
    <div className={styles.dropdownContainer}>
      <select value={dropdownValue} onChange={handleVersionSelection}>
        <option value={""}>All</option>
        {Object.keys(SpecEdition)
          .filter((v) => isNaN(Number(v)))
          .map((key) => {
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
      </select>
    </div>
  );
}
