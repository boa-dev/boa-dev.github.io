import React from "react";

import styles from "./styles.module.css";
import { Editor } from "@monaco-editor/react";

type TestViewPortProps = {
    testName: string,
    t262Path: string,
}

export default function TestViewPort(props: TestViewPortProps): JSX.Element {
    const [testContent, setTestContent] = React.useState<string | null>(null);

    // path constants
    const tc39raw = "https://raw.githubusercontent.com/tc39/test262/";
    const tc39Home = "https://github.com/tc39/test262/blob/main/";

    React.useEffect(()=> {
        const fetchRaw = async(requestPath) => {
            const response = await fetch(requestPath);
            return await response.text();
        }

        const filePath = props.t262Path + "/" + props.testName;
        const fullPath = tc39raw + filePath;

        fetchRaw(fullPath)
            .then(data=>setTestContent(data))


    }, [props.testName])

    const generateLink = () => {
        const pathValues = props.t262Path.split("/")
        const trimmedPath = pathValues.slice(1, pathValues.length).join("/");
        return tc39Home + trimmedPath + "/" + props.testName;
    }

    return (
        <div className={styles.testContainer}>
            <div className="card">
                <div className="card__header">
                    <h3>{"Test: " + props.testName}</h3>
                    <a href={generateLink()} target="_blank">Visit Repo</a>
                </div>
                <div className="card__body" style={{overflow: "auto"}}>
                    {/*
                        The div here is needed to set editor size.
                        Monaco editor auto resizes and so does card body,
                        so they cause a resize observer error without a
                        div container.
                    */}
                    <div className={styles.editorContainer}>
                        <Editor
                            className={styles.testEditor}
                            theme="vs-dark"
                            language="javascript"
                            options={{minimap: {enabled: false}}}
                            value = {testContent}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}