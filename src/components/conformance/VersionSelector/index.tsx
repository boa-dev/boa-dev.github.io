import React from "react";
import { VersionItem } from "@site/src/pages/conformance/types";
import styles from "./styles.module.css";

interface SelectorProps {
    availableVersions: VersionItem[]
    setNewVersion: (newVersion: VersionItem) => void
}

export default function VersionSelector(props: SelectorProps): JSX.Element {
    return (
        <section>
            <div className={styles.versionSelector}>
                {props.availableVersions.map((version)=>{
                    return <Version key={version.tagName} setNewVersion={props.setNewVersion} version={version} />
                })}
            </div>
        </section>
    )
}

function Version(props): JSX.Element {
    return(
        <div className={styles.versionCard}>
            <div className={styles.versionTitle}><b>{"Release: " + props.version.tagName}</b></div>
            <button className={"button button--secondary button--sm"} value={props.version.tagName} onClick={()=>props.setNewVersion(props.version)}>View Results</button>
        </div>
    )
}
