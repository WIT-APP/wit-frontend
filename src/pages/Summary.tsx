import BarChart from '@/components/graficos/BarChart'
import LineChart from '@/components/graficos/LineChart'
import PieChart from '@/components/graficos/PieChart'



function Summary() {
  return (
    <div>
        <LineChart />
        <BarChart />
        <PieChart />
    </div>
  )
}

export default Summary