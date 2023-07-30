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

    // Weird ResizeObserverError handling hack.
    // Relevant Links:
    //  - https://stackoverflow.com/questions/75774800/how-to-stop-resizeobserver-loop-limit-exceeded-error-from-appearing-in-react-a/76107850#76107850
    //  - https://stackoverflow.com/questions/64238740/how-to-ignore-the-resizeobserver-loop-limit-exceeded-in-testcafe
    //
    // The error itself seems to be a benign error and is being triggered by monaco editor resizing in this layout.
    const resizeObserverHack = (e) => {
        if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
            e.stopImmediatePropagation();
        }
    }

    React.useEffect(() => {
        window.addEventListener('error', resizeObserverHack);

        return () => {
            window.removeEventListener('error', resizeObserverHack)
        }
    }, []);

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
                    <a href={generateLink()} >Visit Repo</a>
                </div>
                <div className="card__body" style={{overflow: "auto"}}>
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
    )
}