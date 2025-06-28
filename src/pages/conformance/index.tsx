import ConformanceView from "@site/src/components/conformance";
import {
  VersionItem,
  ConformanceState,
  UrlState,
} from "@site/src/components/conformance/types";
import {
  createUrlState,
  updateInitialConformanceState,
} from "@site/src/components/conformance/utils";
import { useLocation } from "@docusaurus/router";
import Layout from "@theme/Layout";
import React from "react";

import styles from "./styles.module.css";

// Note there are other fields, but only adding the ones that are needed.
type ReleasesObject = {
  tag_name: string;
};

// TODO: Add header file to speed up statisic fetching for initial render?
export default function Conformance() {
  const location = useLocation<ConformanceState>();
  const [releaseRecords, setReleaseRecords] = React.useState<
    VersionItem[] | undefined
  >(null);

  const urlState = createUrlState(location.search);

  // Initial Render useEffect
  React.useEffect(() => {
    const validateReleaseVersion = (releaseTag: string) => {
      const version = releaseTag.split(".");
      // Check if correct version tag is present and major release is 1+
      const versionTagValidated =
        version[0].includes("v") && parseInt(version[0].replace("v", "")) > 0;
      return versionTagValidated || 10 <= parseInt(version[1]);
    };

    const fetchReleases = async () => {
      const response = await fetch(
        "https://api.github.com/repos/boa-dev/boa/releases",
      );
      const releases = await response.json();
      const releasesArray: ReleasesObject[] = Array.isArray(releases)
        ? (releases as Array<ReleasesObject>)
        : [];
      return releasesArray
        .filter((potentialRelease) =>
          validateReleaseVersion(potentialRelease.tag_name),
        )
        .map((release) => {
          return {
            tagName: release.tag_name,
            fetchUrl: `https://raw.githubusercontent.com/boa-dev/data/main/test262/refs/tags/${release.tag_name}/latest.json`,
          };
        });
    };

    const mainVersion = {
      tagName: "main",
      fetchUrl: `https://raw.githubusercontent.com/boa-dev/data/main/test262/refs/heads/main/latest.json`,
    };

    fetchReleases().then((releases) =>
      setReleaseRecords([mainVersion, ...releases]),
    );
  }, []);

  const resolvedState = updateInitialConformanceState(urlState, location.state);

  return (
    <Layout title="Conformance" description="Boa Conformance Page">
      <main className={styles.mainLayout}>
        {releaseRecords ? (
          <ConformanceView state={resolvedState} records={releaseRecords} />
        ) : null}
      </main>
    </Layout>
  );
}
