
import { columns } from '../data-table/columns';
import { DataTable } from '../data-table/data-table';
import useFilterByEstado from '@/services/GetByEstado';

export const RejectedTable = () => {    
  
      const estado = 'Rechazado'; 
      const { formattedApplicants, isError, isLoading } = useFilterByEstado(estado);
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error fetching data.</div>;
      }
      
    
    
    
      return (
        
        <div className=" container mx-auto p-4 overflow-y-scroll max-h-screen scroll-auto">
        <DataTable columns={columns} data={formattedApplicants} />
      </div>
    
    
    
      )
    }
