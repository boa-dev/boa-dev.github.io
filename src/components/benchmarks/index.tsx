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
  BarElement
);

interface BenchmarkGraphsProps {
  selectedEngines: string[];
}

const ChartOptions = {
  plugins: {
    colors: {
      forceOverride: true,
    },
  },
};

export const BenchmarkGraphs: React.FC<BenchmarkGraphsProps> = ({
  selectedEngines,
}) => {
  // Control the state of which engines are displayed using a Set

  const [data, setData] = React.useState([]);
  const colorMode = useColorMode();
  ChartJS.defaults.color = colorMode.colorMode === "light" ? "#666" : "white";

  React.useEffect(() => {
    Promise.all([
      buildChartFromBenchmark("Crypto", selectedEngines),
      buildChartFromBenchmark("DeltaBlue", selectedEngines),
      buildChartFromBenchmark("EarleyBoyer", selectedEngines),
      buildChartFromBenchmark("NavierStokes", selectedEngines),
      buildChartFromBenchmark("RayTrace", selectedEngines),
      buildChartFromBenchmark("RegExp", selectedEngines),
      buildChartFromBenchmark("Richards", selectedEngines),
      buildChartFromBenchmark("Splay", selectedEngines),
      buildChartFromBenchmark("score", selectedEngines),
    ]).then((charts) => setData(charts));
  }, [selectedEngines]);

  return data && data.map((chart) => chart);
};

const buildChartFromBenchmark = async (name: string, engines: string[]) => {
  const data = await fetchData(
    `https://raw.githubusercontent.com/boa-dev/data/main/bench/results/${name}.json`,
    engines
  );

  const barData = getBarChartData(data);

  return (
    <div key={name}>
      <div className={`card__header ${styles["benchmark-card-header"]}`}>
        <Heading as="h2">{name}</Heading>
      </div>
      <div className={styles["cards-wrap"]}>
        <div className={`card ${styles["benchmark-card"]}`}>
          <Line data={data} options={ChartOptions}></Line>
        </div>
        <div className={`card ${styles["benchmark-card"]}`}>
          <Bar data={barData} options={ChartOptions}></Bar>
        </div>
      </div>
    </div>
  );
};

const fetchData = async (url: string, engines: string[]) => {
  const response = await fetch(url);
  const data = await response.json();
  // Add the dataset if the engine is enabled
  return {
    labels: data.labels.map((epoch: number) =>
      new Date(epoch).toLocaleDateString()
    ),
    datasets: Object.keys(data.results)
      .filter((engine) => engines.includes(engine))
      .map((engine) => {
        return {
          label: engine,
          data: data.results[engine],
          fill: false,
        };
      }),
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
