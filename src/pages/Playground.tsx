import Editor from "@monaco-editor/react";
import Layout from "@theme/Layout";
import { evaluate } from "@ZackMitkin/boa";
import React from "react";

const initialCode = `function greet(targetName) {
  return 'Hello, ' + targetName + '!';
}

greet('World')
`;

export default function BoaPlayground() {
  const [input, setInput] = React.useState(initialCode);
  const output = React.useMemo(() => evaluate(input), [input]);

  return (
    <Layout title="Playground" description="Boa Playground">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Editor
          height="78vh"
          theme="vs-dark"
          language="javascript"
          options={{ minimap: { enabled: false } }}
          value={input}
          onChange={setInput}
        />
        <div style={{ width: "30%", minWidth: "200px", paddingInline: "24px" }}>
          <h1>Output</h1>
          {`> ${output ?? ""}`}
        </div>
      </div>
    </Layout>
  );
}
