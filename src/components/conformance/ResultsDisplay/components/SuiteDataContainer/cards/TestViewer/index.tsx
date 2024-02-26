import React from "react";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import { Editor } from "@monaco-editor/react";

type TestViewerProps = {
  testName: string;
  t262Path: string;
  backToGrid: () => void;
};

export default function TestViewer(props: TestViewerProps): JSX.Element {
  const [testContent, setTestContent] = React.useState<string | null>(null);

  // path constants
  const tc39raw = "https://raw.githubusercontent.com/tc39/test262/";
  const tc39Home = "https://github.com/tc39/test262/blob/main/";

  React.useEffect(() => {
    const fetchRaw = async (requestPath) => {
      const response = await fetch(requestPath);
      return await response.text();
    };

    const filePath = props.t262Path + "/" + props.testName;
    const fullPath = tc39raw + filePath;

    fetchRaw(fullPath).then((data) => setTestContent(data));
  }, [props.testName]);

  const generateLink = () => {
    const pathValues = props.t262Path.split("/");
    const trimmedPath = pathValues.slice(1, pathValues.length).join("/");
    return tc39Home + trimmedPath + "/" + props.testName;
  };

  return (
    <div className={styles.testViewerCard}>
      <div className="card">
        <div className="card__header">
          <Heading as="h3" className={styles.testTitle}>
            {"Test: " + props.testName}
          </Heading>
          <div className={styles.headerOptions}>
            <button
              className={"button button--primary button--sm"}
              onClick={props.backToGrid}
            >
              Back
            </button>
            <Link to={generateLink()}>Visit Repo</Link>
          </div>
        </div>
        <div className="card__body" style={{ overflow: "auto" }}>
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
              options={{ minimap: { enabled: false } }}
              value={testContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
