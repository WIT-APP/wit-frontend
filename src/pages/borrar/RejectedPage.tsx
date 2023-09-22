import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
import useFilterByEstado from "@/services/GetByEstado";
import { useParams } from "react-router-dom";

export default function RejectedPage() {
  const estado = "Rechazado";
  const param = useParams();
  console.log(param);
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
  );
}
