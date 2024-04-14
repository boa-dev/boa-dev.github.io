import React from "react";
import { useHistory } from "@docusaurus/router";
import {
  ConformanceState,
  VersionItem,
} from "@site/src/components/conformance/types";
import styles from "./styles.module.css";
import { createState } from "../utils";

interface SelectorProps {
  availableVersions: VersionItem[];
}

export default function VersionSelector(props: SelectorProps): JSX.Element {
  return (
    <div className={styles.versionSelector}>
      {props.availableVersions.map((version) => {
        return <Version key={version.tagName} version={version} />;
      })}
    </div>
  );
}

type VersionProps = {
  version: VersionItem;
};

function Version(props: VersionProps): JSX.Element {
  const history = useHistory<ConformanceState>();

  return (
    <div className={styles.versionCard}>
      <div className={styles.versionTitle}>
        <b>{"Release: " + props.version.tagName}</b>
      </div>
      <button
        className={"button button--primary button--sm"}
        onClick={() =>
          history.push({
            pathname: "/conformance",
            state: createState(props.version),
          })
        }
      >
        View Results
      </button>
    </div>
  );
}
