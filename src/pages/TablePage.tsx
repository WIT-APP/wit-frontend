// import { columns } from "@/components/data-table/columns";
// import { DataTable } from "@/components/data-table/data-table";
import { DataTable } from "@/components/data-table/DataTable";
import useFilterByEstado from "@/services/GetByEstado";
import { useParams } from "react-router-dom";
import { tableColumns } from "@/components/data-table/ColumnsComp"; // Importa tableColumns desde ColumnsComp

export default function TablePage() {
  const param = useParams();
  const estado = param?.Aplicante || "";

  const { formattedApplicants, isError, isLoading } = useFilterByEstado(estado);

  if (isLoading) {
    return <div>Loading...</div>;
  }



  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div className=" container mx-auto p-4 overflow-y-scroll max-h-screen scroll-auto">
      <DataTable  columns={tableColumns} data={formattedApplicants} />
    </div>
  );
}
