import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Pie } from "react-chartjs-2";
import { TotalesEstado, useGetTotalEstado } from "@/services/GetTotalEstado";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const, // Cambia "bottom" a "bottom" as const
      align: "start" as const, // Cambia "start" a "start" as const
      labels: {
        color: 'black',
        boxWidth: 20,
        padding: 15,
      },
    },
  },
};

function PieChart() {
  const { totalesEstado, isError, isLoading } = useGetTotalEstado();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !Array.isArray(totalesEstado)) {
    return <div>Error fetching data.</div>;
  }

  const scores = totalesEstado.map((item: TotalesEstado) => item.count || 0);
  const labels = totalesEstado.map((item: TotalesEstado) => item.estado || "");

  const data = {
    datasets: [
      {
        label: "Estados",
        data: scores,
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 99, 132, 0.4)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
    labels,
  };

  return <Pie className="w-96" data={data} options={options} />;
}

export default PieChart;
