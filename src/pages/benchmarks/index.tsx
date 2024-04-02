import Layout from "@theme/Layout";
import {
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

export default function Benchmarks() {
  const [data, setData] = React.useState([]);
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
  }, []);

  return (
    <Layout title="Benchmarks" description="Boa Benchmarks Page">
      {data && data.map((chart) => chart)}
    </Layout>
  );
}

const buildChartFromBenchmark = async (name: string) => {
  const data = await fetchData(
    `https://raw.githubusercontent.com/boa-dev/data/main/bench/results/${name}.json`
  );

  return (
    <Line
      data={data}
      options={{ plugins: { title: { display: true, text: name } } }}
    ></Line>
  );
};

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return {
    labels: data.labels.map((epoch: number) =>
      new Date(epoch).toLocaleDateString()
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
