import BarChart from "@/components/graficos/BarChart";
// import LineChart from "@/components/graficos/LineChart";
import PieChart from "@/components/graficos/PieChart";

function Summary() {
  return (
    <div className="flex gap-5 flex-wrap">
      <div>
        <h2 className="text-center py-6 text-green2 ">Aplicantes por estado</h2>
        <PieChart />
      </div>

      <div>
      <h2 className="text-center py-6 text-green2 ">Total matriculados por curso</h2>
        <BarChart />
      </div>
    </div>
  );
}

export default Summary;
