"use client";
import * as React from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { downloadExcel } from "react-export-table-to-excel";

type TData = {
  id: number;
  nombre: string;
  apellidos: string;
  correo_electronico: string;
  telefono: string;
  programa_cursar: string;
  fecha_de_applicacion: string;
  genero: string;
  fecha_de_nacimiento: string;
  pais_de_nacimiento: string;
  tipo_documento_identidad: string;
  documento_de_identidad: string;
  direccion: string;
  codigo_postal: string;
  ciudad: string;
  provincia: string;
  pais_de_residencia: string;
  permiso: string;
  colectivo: string[];
  educacion: string;
  estudio_mas_altos: string;
  situacion_profesional: string;
  intereses_actuales: string;
  dedicacion_semanal: string;
  acceso_internet_dispositivos: string;
  formacion_online: string;
  razones_unirse: string;
  encontrar_programa: string;
  mas_informacion: string;
};


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
interface SelectedRowData {
  id: number;
  nombre: string;
  apellidos: string;
  correo_electronico: string;
  telefono: string;
  programa_cursar: string;
  fecha_de_applicacion: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const header = [
    "Nombre",
    "Apellidos",
    "Email",
    "Telefono",
    "Programa a Cursar",
    "Estado",
    "Fecha de aplicación",
    "Genero",
    "Fecha de nacimiento",
    "Pais de nacimiento",
    "Tipo de Docuemnto de identidad",
    "Documento de Identidad",
    "Dirección",
    "Codigo Postal",
    "Ciudad",
    "Provincia",
    "País de residencia",
    "Permiso",
    "Colectivo",
    "Educacion",
    "Estudios mas altos",
    "Situacion profesional",
    "Intereses actuales",
    "Dedicación semanal",
    "Acceso a internet y dispositivos",
    "Formación online",
    "Razones para unirse",
    "Donde encontró el programa",
    "Mas información",
  ];

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  function handleDownloadExcel() {
    // console.log(rowSelection);
    const selectedRowIds: SelectedRowData[] = Object.keys(rowSelection)
      .filter((index) => (rowSelection as Record<string, string>)[index])
      .map((index) => data[parseInt(index)].id);
    console.log(selectedRowIds);

    const selectedRowsToExport = data.filter((row) =>
      selectedRowIds.includes(row.id)
    );

    const rowsForExcel = selectedRowsToExport.map((row) => {
      return {
        Nombre: row.nombre || "",
        Apellidos: row.apellidos || "",
        Email: row.correo_electronico || "",
        Telefono: row.telefono || "",
        "Programa a Cursar": row.programa_cursar || "",
        Estado: row.estado || "",
        "Fecha de aplicación": row.fecha_de_applicacion || "",
        Genero: row.genero || "",
        "Fecha de nacimiento": row.fecha_de_nacimiento || "",
        "Pais de nacimiento": row.pais_de_nacimiento || "",
        "Documento de identidad": row.documento_de_identidad || "",
        "Tipo de Docuemnto de identidad": row.tipo_documento_identidad || "",
        Dirección: row.direccion || "",
        "Codigo Postal": row.codigo_postal || "",
        Ciudad: row.ciudad || "",
        Provincia: row.provincia || "",
        "País de residencia": row.pais_de_residencia || "",
        Permiso: row.permiso || "",
        Colectivo: row.colectivo.map((item) => item).join(", ") || [],
        Educacion: row.educacion || "",
        "Estudios mas altos": row.estudio_mas_altos || "",
        "Situacion profesional": row.situacion_profesional || "",
        "Intereses actuales": row.intereses_actuales || "",
        "Dedicación semanal": row.dedicacion_semanal || "",
        "Acceso a internet y dispositivos":
          row.acceso_internet_dispositivos || "",
        "Formación online": row.formacion_online || "",
        "Razones para unirse": row.razones_unirse || "",
        "Donde encontró el programa": row.encontrar_programa || "",
        "Mas información": row.mas_informacion || "",
      };
    });

    console.log(rowsForExcel);

    downloadExcel({
      fileName: "Tabla de usuarios",
      sheet: "Usuarios",
      tablePayload: {
        header,
        body: rowsForExcel, // Utiliza las filas seleccionadas
      },
    });
  }


  function handleDownloadExcelAll() {
    // console.log(rowSelection);
    const selectedRowIds: SelectedRowData[] = Object.keys(rowSelection)
      .filter((index) => rowSelection[index])
      .map((index) => data[parseInt(index)].id);
    console.log(selectedRowIds);

    const selectedRowsToExport = data.filter((row) =>
      selectedRowIds.includes(row.id)
    );

    const rowsForExcel = data.map((row) => {
      return {
        Nombre: row.nombre || "",
        Apellidos: row.apellidos || "",
        Email: row.correo_electronico || "",
        Telefono: row.telefono || "",
        "Programa a Cursar": row.programa_cursar || "",
        Estado: row.estado || "",
        "Fecha de aplicación": row.fecha_de_applicacion || "",
        Genero: row.genero || "",
        "Fecha de nacimiento": row.fecha_de_nacimiento || "",
        "Pais de nacimiento": row.pais_de_nacimiento || "",
        "Documento de identidad": row.documento_de_identidad || "",
        "Tipo de Docuemnto de identidad": row.tipo_documento_identidad || "",
        Dirección: row.direccion || "",
        "Codigo Postal": row.codigo_postal || "",
        Ciudad: row.ciudad || "",
        Provincia: row.provincia || "",
        "País de residencia": row.pais_de_residencia || "",
        Permiso: row.permiso || "",
        Colectivo: row.colectivo.map((item) => item).join(", ") || [],
        Educacion: row.educacion || "",
        "Estudios mas altos": row.estudio_mas_altos || "",
        "Situacion profesional": row.situacion_profesional || "",
        "Intereses actuales": row.intereses_actuales || "",
        "Dedicación semanal": row.dedicacion_semanal || "",
        "Acceso a internet y dispositivos":
          row.acceso_internet_dispositivos || "",
        "Formación online": row.formacion_online || "",
        "Razones para unirse": row.razones_unirse || "",
        "Donde encontró el programa": row.encontrar_programa || "",
        "Mas información": row.mas_informacion || "",
      };
    });

    console.log(rowsForExcel);

    downloadExcel({
      fileName: "Tabla de usuarios",
      sheet: "Usuarios",
      tablePayload: {
        header,
        body: rowsForExcel, // Utiliza las filas seleccionadas
      },
    });
  }

  return (
    <div>
    

      <div className="este flex items-center py-4">
      <div className="flex gap-8 justify-between">
        <button onClick={handleDownloadExcel}>Descargar seleccionados</button>
        <button onClick={handleDownloadExcelAll}>Descargar todos</button>
      </div>
        <Input
          placeholder="Filter emails..."
          value={
            (table
              .getColumn("correo_electronico")
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn("correo_electronico")
              ?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
      {/* <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                   <button> Export excel </button>

                </DownloadTableExcel> */}
    </div>
  );
}
