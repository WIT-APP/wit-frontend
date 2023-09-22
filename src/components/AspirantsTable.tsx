
import { DataTable } from './data-table/data-table'
import { columns } from './data-table/columns'
import { usePreApprovedApplicants } from '@/services/PreApprovedAplicants';



function AspirantsTable() {
    const { isLoading, isError, applicant } = usePreApprovedApplicants();
  console.log(applicant)
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    
    <div className=" container mx-auto p-4 overflow-y-scroll max-h-screen scroll-auto">
    <DataTable columns={columns} data={applicant} />
  </div>



  )
}

export default AspirantsTable
