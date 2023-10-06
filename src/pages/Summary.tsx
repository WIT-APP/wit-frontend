import BarChart from '@/components/graficos/BarChart'
import LineChart from '@/components/graficos/LineChart'
import PieChart from '@/components/graficos/PieChart'



function Summary() {
    
   
    

  return (
    <div className='flex gap-5 flex-wrap'>
        <div>
        <h2 className='text-center py-6 text-green2 '  >Aplicantes por estado</h2>
      <PieChart />

      </div>
      <div>

        <LineChart />
      </div>
      <div>
      <BarChart />

      </div>
    
      
  
    </div>
  )
}

export default Summary