import Link from "@docusaurus/Link";
import { BenchmarkGraphs } from "@site/src/components/benchmarks";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import { useState } from "react";
import styles from "./styles.module.css";

const engines = [
  "boa",
  "v8-jitless",
  "sm-jitless",
  "kiesel",
  "libjs",
  "duktape",
  "quickjs",
];

export default function Benchmarks() {
  const [selectedEngines, setSelectedEngines] = useState<string[]>([
    "boa",
    "kiesel",
    "libjs",
    "duktape",
    "quickjs",
  ]);

  const [range, setRange] = useState<string>("6");
  console.log(range);

  const handleEngineCheckboxChange = (engine: string) => {
    if (selectedEngines.includes(engine)) {
      setSelectedEngines(selectedEngines.filter((e) => e !== engine));
    } else {
      setSelectedEngines([...selectedEngines, engine]);
    }
  };

  const handleRangeCheckboxChange = (evt: any) => {
    setRange(evt.target.value);
  };

  return (
    <Layout title="Benchmarks" description="Boa Benchmarks Page">
      <div className={styles.container}>
        <Heading as="h1">Benchmarks</Heading>
        <p>
          These benchmarks are taken from the{" "}
          <Link to="https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7">
            V8 benchmark suite V7.{" "}
          </Link>
          Our <Link to="https://github.com/boa-dev/data">data repo</Link> runs
          these benchmarks against the listed engines every night using Github
          actions.
        </p>
        <p>The higher the score the better.</p>
        <div className={styles.benchmarkControls}>
          {engines.map((engine) => (
            <div key={engine} className={styles.benchmarkLabelWrap}>
              <label>
                <input
                  type="checkbox"
                  value={engine}
                  checked={selectedEngines.includes(engine)}
                  onChange={() => handleEngineCheckboxChange(engine)}
                />
                {engine}
              </label>
            </div>
          ))}
        </div>


        <form>
          <fieldset className={styles.benchmarkControls}>
            <legend>Select rolling range</legend>
            <div className={styles.benchmarkLabelWrap}>
              <input
                type="radio"
                value={1}
                checked={range === "1"}
                onChange={handleRangeCheckboxChange}
              />
              1 Month
            </div>

            <div className={styles.benchmarkLabelWrap}>
              <input
                type="radio"
                value={6}
                checked={range === "6"}
                onChange={handleRangeCheckboxChange}
              />
              6 Month
            </div>

            <div className={styles.benchmarkLabelWrap}>
              <input
                type="radio"
                value={12}
                checked={range === "12"}
                onChange={handleRangeCheckboxChange}
              />
              12 Month
            </div>
          </fieldset>
        </form>
        <BenchmarkGraphs selectedEngines={selectedEngines} range={range}/>
      </div>
    </Layout >
  );
}
