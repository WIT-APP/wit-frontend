/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
import { RiFileExcel2Fill } from "react-icons/ri";

type MyColumnDef<TData extends Record<string, any>> = ColumnDef<TData, any>;
interface DataTableProps<TData extends Record<string, any>> {
  columns: MyColumnDef<TData>[];
  data: TData[];
}

export function DataTable<TData extends Record<string, any>>({
  columns,
  data,
}: DataTableProps<TData>) {
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
    "Observaciones",
    "Invitaciones",
  ];

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection]: any = React.useState({});
  const [value, setValue] = React.useState("correo_electronico");

  const opciones = [
    { value: "nombre", label: "Nombre" },
    { value: "apellidos", label: "Apellidos" },
    { value: "correo_electronico", label: "Email" },
    { value: "telefono", label: "Telefono" },
    { value: "programa_cursar", label: "Programa a Cursar" },
    { value: "observaciones", label: "Observaciones" },
  ];

  const table = useReactTable({
    data,
    columns: columns as ColumnDef<TData, unknown>[],
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

  const handleSelectFilter = (value: any) => {
    setValue(value);
  };

  function handleDownloadExcel() {
    const selectedRowIds: string[] = Object.keys(rowSelection)
      .filter((index) => rowSelection[index])
      .map((index) => data[parseInt(index)].id);

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
        "Tipo de Documento de identidad": row.tipo_documento_identidad || "",
        "Documento de identidad": row.documento_de_identidad || "",
        Dirección: row.direccion || "",
        "Codigo Postal": row.codigo_postal || "",
        Ciudad: row.ciudad || "",
        Provincia: row.provincia || "",
        "País de residencia": row.pais_de_residencia || "",
        Permiso: row.permiso || "",
        Colectivo: row.colectivo.map((item: string) => item).join(", ") || "",
        Educacion: row.educacion || "",
        "Estudios mas altos": row.estudio_mas_alto || "",
        "Situacion profesional": row.situacion_profesional || "",
        "Intereses actuales": row.intereses_actuales || "",
        "Dedicación semanal": row.dedicacion_semanal || "",
        "Acceso a internet y dispositivos":
          row.acceso_internet_dispositivos || "",
        "Formación online": row.formacion_online == true ? "si" : "no" || "",
        "Razones para unirse": row.razones_para_unir || "",
        "Donde encontró el programa": row.encontrar_programa || "",
        "Mas información": row.mas_informacion || "",
        Observaciones: row.observaciones || "",
        Invitaciones: row.invitaciones || "",
      };
    });

    downloadExcel({
      fileName: "Tabla de usuarios",
      sheet: "Usuarios",
      tablePayload: {
        header,
        body: rowsForExcel,
      },
    });
  }

  function handleDownloadExcelAll() {
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
        "Tipo de Documento de identidad": row.tipo_documento_identidad || "",
        Dirección: row.direccion || "",
        "Codigo Postal": row.codigo_postal || "",
        Ciudad: row.ciudad || "",
        Provincia: row.provincia || "",
        "País de residencia": row.pais_de_residencia || "",
        Permiso: row.permiso || "",
        Colectivo: row.colectivo.map((item: string) => item).join(", ") || "",
        Educacion: row.educacion || "",
        "Estudios mas altos": row.estudio_mas_alto || "",
        "Situacion profesional": row.situacion_profesional || "",
        "Intereses actuales": row.intereses_actuales || "",
        "Dedicación semanal": row.dedicacion_semanal || "",
        "Acceso a internet y dispositivos":
          row.acceso_internet_dispositivos || "",
        "Formación online": row.formacion_online == true ? "si" : "no" || "",
        "Razones para unirse": row.razones_para_unir || "",
        "Donde encontró el programa": row.encontrar_programa || "",
        "Mas información": row.mas_informacion || "",
        Observaciones: row.observaciones || "",
        Invitaciones: row.invitaciones || "",
      };
    });
    downloadExcel({
      fileName: "Tabla de usuarios",
      sheet: "Usuarios",
      tablePayload: {
        header,
        body: rowsForExcel,
      },
    });
  }

  return (
    <div>
      <div className="flex items-center py-4 max-sm:ml-10 max-sm:flex-col max-sm:items-start">
        <div className="flex gap-8 justify-between flex-wrap">
          <button onClick={handleDownloadExcel}>
            <div className="flex items-center gap-2 text-green2">
              <RiFileExcel2Fill /> seleccionados
            </div>
          </button>
          <button onClick={handleDownloadExcelAll}>
            <div className="flex items-center gap-2 text-green2">
              <RiFileExcel2Fill /> todos{" "}
            </div>
          </button>
        </div>
        <Input
          placeholder={`Filtrar por... ${value}`}
          value={(table.getColumn(value)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(value)?.setFilterValue(event.target.value)
          }
          className="sm:ml-5 sm:mr-5 max-w-sm"
        />
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Buscar por ..." />
          </SelectTrigger>
          <SelectContent>
            {opciones.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                onSelect={() => {
                  handleSelectFilter(value);
                }}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columnas
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
    </div>
  );
}

export default DataTable;
