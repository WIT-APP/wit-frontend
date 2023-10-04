import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line } from 'react-chartjs-2';
import { useMemo } from "react";

const scores = [6, 5, 5, 8, 1, 6, 4, 3];
const labels = [100, 200, 300, 400, 500, 600, 700];

const options = {
    responsive: true,
}

function LineChart() {
    const data = useMemo(() => {
        return {
            datasets: [
                {
                    label: "Mis datos",
                    data: scores,
                }
            ],
            labels
        };
    }, []); 

return <Line data={data} options={options} />

}





export default LineChart;
