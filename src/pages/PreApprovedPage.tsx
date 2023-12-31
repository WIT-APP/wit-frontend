// import { columns } from "@/components/data-table/antiguos/columns";
import { DataTable } from "@/components/data-table/DataTable";
import { usePreApprovedApplicants } from "@/services/PreApprovedAplicants";
import { tableColumns } from "@/components/data-table/ColumnsComp"; // Importa tableColumns desde ColumnsComp


export default function PreApproved() {
  const { isLoading, isError, applicant } = usePreApprovedApplicants();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !applicant) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div className="mx-auto p-4 overflow-y-scroll max-h-screen scroll-auto">
      <DataTable columns={tableColumns} data={applicant} />
    </div>
  );
}
