import Layout from "@theme/Layout";
import React from "react";
import { VersionItem } from "@site/src/components/conformance/types";
import VersionSelector from "@site/src/components/conformance/VersionSelector";
import ConformanceBanner from "@site/src/components/conformance/Banner";
import ResultsDisplay from "@site/src/components/conformance/ResultsDisplay";

import styles from "./styles.module.css";

// TODO: Add header file to speed up statisic fetching for initial render?
export default function Conformance() {
  const [version, setVersion] = React.useState<VersionItem | null>(null);
  const [releaseRecords, setReleaseRecords] = React.useState<VersionItem[] | null>(null);

  React.useEffect(()=> {
    const validateReleaseVersion = (releaseTag: string) => {
      const version = releaseTag.split(".");
      // Check if correct version tag is present and major release is 1+
      const versionTagValidated = version[0].includes("v") && parseInt(version[0].replace("v", "")) > 0
      return versionTagValidated || (10 <= parseInt(version[1]))
    }

    const fetchReleases = async() => {
      const response = await fetch("https://api.github.com/repos/boa-dev/boa/releases");
      const releases = await response.json()
      return releases
        .filter(potentialRelease=> validateReleaseVersion(potentialRelease.tag_name))
        .map((release) => {
          return {
              tagName: release.tag_name,
              fetchUrl: `https://boajs.dev/boa/test262/refs/tags/${release.tag_name}/latest.json`
          }
      })
  }

  const mainVersion = {
    tagName:"main",
    fetchUrl:`https://boajs.dev/boa/test262/refs/heads/main/latest.json`
  };

  fetchReleases()
      .then(releases => setReleaseRecords([mainVersion, ...releases]))
  }, [])

  const setNewVersion = (newVersion: VersionItem) => {
    setVersion(newVersion)
  }

  return (
    <Layout title="Conformance" description="Boa Conformance Page">
      <main className={styles.mainLayout}>
        {releaseRecords
        ? <VersionSelector availableVersions={releaseRecords} setNewVersion={setNewVersion} />
        : null}
        {releaseRecords
        ? version
          ? <ResultsDisplay key={version.tagName} activeVersion={version} />
          :<ConformanceBanner focusItems ={releaseRecords.slice(0, 2)} setNewVersion={setNewVersion} />
        : null
        }
      </main>
    </Layout>
  );
}
