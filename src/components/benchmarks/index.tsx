import { useColorMode } from "@docusaurus/theme-common";
import Heading from "@theme/Heading";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Colors,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import styles from "./styles.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
  BarElement,
);

export function BenchmarkGraphs() {
  const [data, setData] = React.useState([]);
  const colorMode = useColorMode();
  ChartJS.defaults.color = colorMode.colorMode === "light" ? "#666" : "white";

  React.useEffect(() => {
    Promise.all([
      buildChartFromBenchmark("Crypto"),
      buildChartFromBenchmark("DeltaBlue"),
      buildChartFromBenchmark("EarleyBoyer"),
      buildChartFromBenchmark("NavierStokes"),
      buildChartFromBenchmark("RayTrace"),
      buildChartFromBenchmark("RegExp"),
      buildChartFromBenchmark("Richards"),
      buildChartFromBenchmark("Splay"),
      buildChartFromBenchmark("score"),
    ]).then((charts) => setData(charts));
  }, [colorMode.colorMode]);

  return data && data.map((chart) => chart);
}

const buildChartFromBenchmark = async (name: string) => {
  const data = await fetchData(
    `https://raw.githubusercontent.com/boa-dev/data/main/bench/results/${name}.json`,
  );

  const barData = getBarChartData(data);

  return (
    <div key={name}>
      <div className={`card__header ${styles["benchmark-card-header"]}`}>
        <Heading as="h2">{name}</Heading>
      </div>
      <div className={styles["cards-wrap"]}>
        <div className={`card ${styles["benchmark-card"]}`}>
          <Line data={data}></Line>
        </div>
        <div className={`card ${styles["benchmark-card"]}`}>
          <Bar data={barData}></Bar>
        </div>
      </div>
    </div>
  );
};

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return {
    labels: data.labels.map((epoch: number) =>
      new Date(epoch).toLocaleDateString(),
    ),
    datasets: [
      {
        label: "boa",
        data: data.results["boa"],
        fill: false,
      },
      {
        label: "v8-jitless",
        data: data.results["v8-jitless"],
        fill: false,
      },
      {
        label: "libjs",
        data: data.results["libjs"],
        fill: false,
      },
      {
        label: "duktape",
        data: data.results["duktape"],
        fill: false,
      },
      {
        label: "quickjs",
        data: data.results["quickjs"],
        fill: false,
      },
    ],
  };
};

const getBarChartData = (data) => {
  // We only want the last value from each dataset
  return {
    labels: [data.labels[data.labels.length - 1]],
    datasets: data.datasets.map((dataset) => {
      return {
        label: dataset.label,
        data: [dataset.data[dataset.data.length - 1]],
      };
    }),
  };
};
