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
import { useEffect, useState } from "react";
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

interface BenchmarkGraphsProps {
  selectedEngines: string[];
  range: string;
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
  range,
}) => {
  // Control the state of which engines are displayed using a Set

  const [charts, setCharts] = useState([]);
  const [data, setData] = useState({});
  const colorMode = useColorMode();
  ChartJS.defaults.color = colorMode.colorMode === "light" ? "#666" : "white";

  useEffect(() => {
    fetch(
      `https://boa-api.jason-williams.co.uk/benchmarks?months=${range}&engines=${selectedEngines.join(",")}`,
    )
      .then((res) => res.json())
      .then((respData) => {
        setData(respData);
      });
  }, [selectedEngines, range]);

  useEffect(() => {
    setCharts(buildChartFromBenchmark(data));
  }, [data]);

  return charts && charts.map((chart) => chart);
};

const normalizeBenchmarkData = (benchmarkData: any[]) => {
  const labels = benchmarkData.map((entry: any) =>
    new Date(entry.date).toLocaleDateString(),
  );

  const engines = Object.keys(benchmarkData[0]).filter((key) => key != "date");

  return {
    labels,
    datasets: engines.map((engine) => ({
      label: engine,
      data: benchmarkData.map((entry) => entry[engine]),
      fill: false,
    })),
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

const buildChartFromBenchmark = (data: any): any[] => {
  let charts = [];
  for (const benchmark in data) {
    const normalizedData = normalizeBenchmarkData(data[benchmark]);
    const barData = getBarChartData(normalizedData);
    charts.push(
      <div key={benchmark}>
        <div className={`card__header ${styles["benchmark-card-header"]}`}>
          <Heading as="h2">{benchmark}</Heading>
        </div>
        <div className={styles["cards-wrap"]}>
          <div className={`card ${styles["benchmark-card"]}`}>
            <Line data={normalizedData} options={ChartOptions}></Line>
          </div>
          <div className={`card ${styles["benchmark-card"]}`}>
            <Bar data={barData} options={ChartOptions}></Bar>
          </div>
        </div>
      </div>,
    );
  }

  return charts;
};
