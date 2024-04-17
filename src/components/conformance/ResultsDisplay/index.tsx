import React from "react";
import SuiteDisplay from "./components/SuiteDisplay";
import {
  ResultInfo,
  VersionItem,
  SuiteResult,
  ConformanceState,
  SortOption,
} from "@site/src/components/conformance/types";
import ResultNavigation from "./nav";
import {
  createState,
  mapToResultInfo,
} from "@site/src/components/conformance/utils";
import { useHistory } from "@docusaurus/router";

import styles from "./styles.module.css";

type ResultsProps = {
  state: ConformanceState;
};

export default function ResultsDisplay(props: ResultsProps): JSX.Element {
  const [currentSuite, setCurrentSuite] = React.useState<SuiteResult | null>(
    null,
  );

  // Refs
  const activeResults = React.useRef<undefined | ResultInfo>();

  const history = useHistory<ConformanceState>();

  React.useEffect(() => {
    // If the version is correctly synced
    if (props.state.version.tagName !== activeResults.current?.version) {
      updateActiveResults().then((results) => {
        activeResults.current = results;
        const foundSuite = findResultsFromPath(results);
        setCurrentSuite(foundSuite);
      });
      // Return to prevent further execution.
      return;
    }

    // TODO / NOTE: there may be a bug with version swapping. TBD.
    // Return early if for some reason activeResults.current is undefined
    if (!activeResults.current) return;

    // Results should be defined from the check on activeResults.current
    const foundSuite = findResultsFromPath(activeResults.current);
    setCurrentSuite(foundSuite);
  }, [props.state]);

  // Fetches the version results
  const fetchResults = async (version: VersionItem) => {
    const response = await fetch(version.fetchUrl);
    return await response.json();
  };

  const updateActiveResults = async (): Promise<ResultInfo> => {
    const data = await fetchResults(props.state.version);
    return mapToResultInfo(props.state.version.tagName, data);
    // setCurrentSuite(resultInfo.results);
  };

  const findResultsFromPath = (activeResultsInfo: ResultInfo): SuiteResult => {
    let newSuiteTarget: SuiteResult | undefined = undefined;
    for (const target of props.state.testPath) {
      if (target === props.state.version.tagName) {
        newSuiteTarget = activeResultsInfo.results;
        continue;
      }

      // Suites must exist here for the path value to be valid.
      for (const suite of newSuiteTarget.suites) {
        if (suite.name === target) {
          newSuiteTarget = suite;
        }
      }
    }
    return newSuiteTarget;
  };

  // Navigates to a suite by adding the SuiteName to the test path array.
  const navigateToSuite = (newSuiteName: string) => {
    const newPath = [...props.state.testPath, newSuiteName];
    history.push({
      pathname: "/conformance",
      state: createState(
        props.state.version,
        newPath,
        props.state.ecmaScriptVersion,
      ),
    });
  };

  // Removes a value or values from the test path array.
  //
  // Used by breadcrumbs for navigation.
  const sliceNavToIndex = (nonInclusiveIndex: number) => {
    const slicedPath = [...props.state.testPath.slice(0, nonInclusiveIndex)];
    history.push({
      pathname: "/conformance",
      state: createState(
        props.state.version,
        slicedPath,
        props.state.ecmaScriptVersion,
      ),
    });
  };

  // Sets the ECMAScript version flag value.
  const setEcmaScriptFlag = (flag: string) => {
    const nulledFlag = flag ? flag : undefined;
    history.push({
      pathname: "/conformance",
      state: createState(
        props.state.version,
        props.state.testPath,
        nulledFlag,
        props.state.sortOption,
      ),
    });
  };

  // Sets the sorting option
  const setSortOption = (option: string) => {
    history.push({
      pathname: "/conformance",
      state: createState(
        props.state.version,
        props.state.testPath,
        props.state.ecmaScriptVersion,
        option,
      ),
    });
  };

  // Sets a selected test.
  const setSelectedTest = (test: string | undefined) => {
    history.push({
      pathname: "/conformance",
      state: createState(
        props.state.version,
        props.state.testPath,
        props.state.ecmaScriptVersion,
        props.state.sortOption,
        test,
      ),
    });
  };

  // Create the t262 URL from testPath with the results commit
  const t262Path = (): string => {
    // NOTE: testPath[0] === activeBoaReleaseTag
    return [
      activeResults.current.test262Commit,
      "test",
      ...props.state.testPath.slice(1, props.state.testPath.length),
    ].join("/");
  };

  return (
    <div className={styles.resultsDisplay}>
      <ResultNavigation
        state={props.state}
        sliceNavToIndex={sliceNavToIndex}
        setEcmaScriptFlag={setEcmaScriptFlag}
        setSortOption={setSortOption}
      />
      {currentSuite ? (
        <SuiteDisplay
          state={props.state}
          currentSuite={currentSuite}
          t262Path={t262Path()}
          navigateToSuite={navigateToSuite}
          setSelectedTest={(test) => setSelectedTest(test)}
        />
      ) : null}
    </div>
  );
}
