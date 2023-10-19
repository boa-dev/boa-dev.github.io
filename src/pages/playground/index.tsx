import Editor from "@monaco-editor/react";
import Layout from "@theme/Layout";
import React from "react";

import styles from "./index.module.css";

const initialCode = `function greet(targetName) {
  return 'Hello, ' + targetName + '!';
}

greet('World')
`;

// Potenital TODO: Add configure bar for horizontal/vertical editor flip and trace output?
export default function BoaPlayground() {
  const [input, setInput] = React.useState(initialCode);
  const [evaluate, setEvaluate] = React.useState(null);

  React.useEffect(() => {
    import("@razican/boa_wasm").then(({ evaluate }) =>
      setEvaluate(() => evaluate)
    );
  }, []);

  const output = React.useMemo(() => {
    if (evaluate !== null) {
      try {
        return evaluate(input);
      } catch (e) {
        return e;
      }
    }
  }, [input, evaluate]);

  return (
    <Layout title="Playground" description="Boa Playground">
      <div className={styles.playgroundLayout}>
        <div className={styles.playgroundEditor} >
          <Editor
            theme="vs-dark"
            language="javascript"
            options={{ minimap: { enabled: false } }}
            value={input}
            onChange={setInput}
          />
        </div>
        <div className={styles.playgroundOutput}>
          <h1>Output</h1>
          {`> ${output ?? ""}`}
        </div>
      </div>
    </Layout>
  );
}
