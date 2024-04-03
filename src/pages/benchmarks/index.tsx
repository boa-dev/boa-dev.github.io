import Link from "@docusaurus/Link";
import { BenchmarkGraphs } from "@site/src/components/benchmarks";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

export default function Benchmarks() {
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
        <BenchmarkGraphs />
      </div>
    </Layout>
  );
}
