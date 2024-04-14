import React from "react";
import ConformanceHeroBanner from "@site/src/components/conformance/HeroBanner";
import ResultsDisplay from "@site/src/components/conformance/ResultsDisplay";
import VersionSelector from "@site/src/components/conformance/VersionSelector";
import { VersionItem, ConformanceState } from "./types";

type ViewProps = {
  state: undefined | ConformanceState;
  records: VersionItem[];
};

export default function ConformanceView(props: ViewProps): JSX.Element {
  return (
    <>
      <VersionSelector availableVersions={props.records} />
      {props.state ? (
        <ResultsDisplay key={props.state.version.tagName} state={props.state} />
      ) : (
        <ConformanceHeroBanner focusItems={props.records.slice(0, 2)} />
      )}
    </>
  );
}
