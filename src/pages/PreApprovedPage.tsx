import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
import { usePreApprovedApplicants } from "@/services/PreApprovedAplicants";

export default function PreApproved() {
  const { isLoading, isError, applicant } = usePreApprovedApplicants();
  console.log(applicant);

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
  );
}
