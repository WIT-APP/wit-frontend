import React from "react";
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
import { UpdateEstado } from "@/services/UpdateEstado";
import { Applicant } from "@/interfaces/applicant.interface";
import { Link } from "react-router-dom";

const iconWhatsapp = <IoLogoWhatsapp />;
const estadosPosibles = [
  "Aplicante",
  "Preaprobado",
  "Invitado",
  "Admitido",
  "Confirmado",
  "Entrevistado",
  "Matriculado",
  "Certificado",
  "Rechazado",
  "Baja",
];

const handleEstadoChange = async (
  e: React.ChangeEvent<HTMLSelectElement>,
  applicant: Applicant
) => {
  const nuevoEstado = e.target.value;

  const confirmacion = window.confirm(
    `¿Estás seguro de cambiar el estado de ${applicant.nombre} a "${nuevoEstado}"?`
  );

  if (!confirmacion) {
    return; // Si el usuario cancela, no realizamos cambios
  }

  try {
    const result = await UpdateEstado(applicant.id, nuevoEstado);

    if (result) {
      const { data, error } = result;

      if (error) {
        console.error("Error al actualizar el estado:", error);
      } else if (data) {
        // Aquí puedes trabajar con los datos actualizados si es necesario
      }
    } else {
      console.error("UpdateEstado no devolvió ningún resultado.");
    }
  } catch (error) {
    console.error("Error al actualizar el estado:", error);
  }

  window.location.reload();
};

// eslint-disable-next-line react-refresh/only-export-components
export const tableColumns: ColumnDef<Applicant>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table?.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row?.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nombre",
    header: ({ column }) =>
      column && (
        <Button
          variant="ghost"
          onClick={() => column?.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    cell: ({ row }) => <div className="ml-4">{row.getValue("nombre")}</div>,
  },
  {
    accessorKey: "apellidos",
    header: ({ column }) =>
      column && (
        <Button
          variant="ghost"
          onClick={() => column?.toggleSorting(column.getIsSorted() === "asc")}
        >
          Apellidos
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    cell: ({ row }) => <div className="ml-4">{row.getValue("apellidos")}</div>,
  },
  {
    accessorKey: "correo_electronico",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column?.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const handleEmailClick = async (
        applicant: Applicant
      ) => {
        const invitacionesActuales = applicant.invitaciones || 0;
        const estadoActual = applicant.estado || 0;

        let requestBody;
        if (estadoActual === "Preaprobado" || estadoActual === "Aplicante") {
          requestBody = JSON.stringify({
            estado: "Invitado",
            invitaciones: invitacionesActuales + 1,
          });
        } else {
          requestBody = JSON.stringify({
            invitaciones: invitacionesActuales + 1,
          });
        }

        // Realizar la mutación manualmente con un fetch
        const apiUrl = `https://wit-backend-factoriaf5.up.railway.app/applicant/${applicant.id}`;

        try {
          const response = await fetch(apiUrl, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: requestBody,
          });

          if (!response.ok) {
            throw new Error("Failed to update applicant.");
          }
        } catch (error) {
          console.error("Error al actualizar el solicitante:", error);
        }

        const correoElectronico: string = row.getValue("correo_electronico");
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
          correoElectronico
        )}`;
        window.open(gmailURL, "_blank");
        window.location.reload();
      };

      return (
        <div className="flex items-center space-x-2 ml-4 relative">
          <span
            onClick={() => handleEmailClick(row.original)}
            className="text-blue2 text-xl flex items-center justify-center cursor-pointer group"
          >
            <IoMail />
            <div
              className={`hidden sm:block absolute top-full rounded-md px-2 py-1 ml-6
                bg-lightgreen2 text-green2 text-sm invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-50
              `}
            >
              Enviar Email
            </div>
          </span>
          <span>{row.getValue("correo_electronico")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "telefono",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column?.toggleSorting(column.getIsSorted() === "asc")}
      >
        Telefono
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex gap-2 items-center relative">
        <span className="text-green2 text-xl items-center cursor-pointer group">
          <Modal
            textButton={iconWhatsapp}
            nombre={row.original.nombre}
            programa_cursar={row.original.programa_cursar}
            apellidos={row.original.apellidos}
            telefono={row.original.telefono}
            invitaciones={row.original.invitaciones}
            estado={row.original.estado}
            id={row.original.id}
          />

          <div
            className={`hidden sm:block absolute top-full rounded-md px-2 py-1
              bg-lightgreen2 text-green2 text-sm invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-50
            `}
          >
            Enviar Whatsapp
          </div>
        </span>
        <span>{row.getValue("telefono")}</span>
      </div>
    ),
  },
  {
    accessorKey: "invitaciones",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column?.toggleSorting(column.getIsSorted() === "asc")}
      >
        Invitaciones
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center mr-4">
        <span>{row.getValue("invitaciones")}</span>
      </div>
    ),
  },

  {
    accessorKey: "programa_cursar",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column?.toggleSorting(column.getIsSorted() === "asc")}
      >
        Programa a Cursar
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-start relative w-52">
        <span className=" text-xs flex items-center justify-center">
          {row.getValue("programa_cursar")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "estado",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column?.toggleSorting(column.getIsSorted() === "asc")}
      >
        Estado
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        <select
          value={row.getValue("estado")}
          onChange={(e) => handleEstadoChange(e, row.original)}
        >
          {estadosPosibles.map((estado, index) => (
            <option key={index} value={estado}>
              {estado}
            </option>
          ))}
        </select>
      </div>
    ),
  },
  {
    accessorKey: "fecha_de_applicacion",
    header: ({ column }) => (
      <div className="flex justify-end">
        <Button
          variant="ghost"
          onClick={() => column?.toggleSorting(column.getIsSorted() === "asc")}
          className="text-right ml-auto" // Alinea el botón a la derecha
        >
          <div className="flex items-center">
            <div className="mr-2">Fecha de aplicación</div>
            <ArrowUpDown className="h-4 w-4" />
          </div>
        </Button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-right mr-4">
        <span>{row.getValue("fecha_de_applicacion")}</span>
      </div>
    ),
  },
  {
    accessorKey: "observaciones",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column?.toggleSorting(column.getIsSorted() === "asc")}
      >
        Observaciones
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("observaciones")}</div>,
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
          <DropdownMenuLabel>Acciones:</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              if (applicant && applicant.correo_electronico) {
                navigator.clipboard.writeText(
                  applicant.correo_electronico.toString()
                );
              }
            }}
          >
            Copiar Correo Aplicante
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to={`/applicantDetails/${applicant.id}`}>
              Detalles Aplicante
            </Link>
          </DropdownMenuItem>
          {(applicant.estado === "Aplicante" ||
            applicant.estado === "Preaprobado" ||
            applicant.estado === "Invitado" ||
            applicant.estado === "Confirmado") && (
            <DropdownMenuItem>
              <Link to={`/newInterview/${applicant.id}`}>
                Realizar Entrevista
              </Link>
            </DropdownMenuItem>
          )}
          {(applicant.estado === "Entrevistado" ||
            applicant.estado === "Admitido" ||
            applicant.estado === "Matriculado" ||
            applicant.estado === "Certificado") && (
            <DropdownMenuItem>
              <Link to={`/applicantInterview/${applicant.id}`}>
                Entrevista Aplicante
              </Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      );
    },
    enableResizing: false,
  },
];
