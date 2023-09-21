import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import Modal from "../Modal";

const iconWhatsapp = <IoLogoWhatsapp />;

export type Applicant = {
  id: string;
  nombre: string;
  apellidos: string;
  correo_electronico: string;
  telefono: string;
  programa_cursar: string;
  fecha_de_applicacion: string;
};

// crear esto en un json. Columnas de la tabla
export const columns: ColumnDef<Applicant>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nombre",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="ml-4">{row.getValue("nombre")}</div>,
  },
  {
    accessorKey: "apellidos",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Apellidos
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="ml-4">{row.getValue("apellidos")}</div>,
  },
  {
    accessorKey: "correo_electronico",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const handleEmailClick = () => {
        const correoElectronico: string = row.getValue("correo_electronico");

        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
          correoElectronico
        )}`;
        window.open(gmailURL, "_blank");
      };
      return (
        <div className="flex items-center space-x-2 ml-4">
          <span
            onClick={handleEmailClick}
            className="text-blue2 text-xl flex items-center justify-center cursor-pointer"
          >
            <IoMail />
          </span>
          <span>{row.getValue("correo_electronico")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "telefono",
    header: "Telefono",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        <span className="text-green2 text-xl items-center cursor-pointer">
          <Modal
            textButton={iconWhatsapp}
            nombre={row.getValue("nombre")}
            programa_cursar={row.getValue("programa_cursar")}
            apellidos={row.getValue("apellidos")}
            telefono={row.getValue("telefono")}
          />
        </span>
        <span>{row.getValue("telefono")}</span>
      </div>
    ),
  },

  {
    accessorKey: "programa_cursar",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Programa a Cursar
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="ml-4">{row.getValue("programa_cursar")}</div>
    ),
  },
  {
    accessorKey: "fecha_de_applicacion",
    header: ({ column }) => {
      return (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-right ml-auto" // Alinea el botón a la derecha
          >
            <div className="flex items-center">
              <div className="mr-2">Fecha de aplicación</div>
              <ArrowUpDown className="h-4 w-4" />
            </div>
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-right mr-4">
        <span>{row.getValue("fecha_de_applicacion")}</span>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const applicant = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(applicant.id)}
            >
              Copy applicant ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View applicant details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
