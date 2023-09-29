import { columns } from "@/components/data-table/antiguos/columns";
import { DataTable } from "@/components/data-table/antiguos/data-table";
import { usePreApprovedApplicants } from "@/services/PreApprovedAplicants";

export default function PreApproved() {
  const { isLoading, isError, applicant } = usePreApprovedApplicants();
  console.log(applicant);

  if (isLoading) {
    return <div>Loading...</div>;
  }
//   if( applicant == undefined) {
//     return <div className="container">No hay ningún Preaprobado</div>
//  }

  if (isError || !applicant) {
    return <div>Error fetching data.</div>;
  }



  console.log(applicant);
  

  return (
    <div className=" container mx-auto p-4 overflow-y-scroll max-h-screen scroll-auto">
      <DataTable columns={columns} data={applicant} />
    </div>
  );
}
