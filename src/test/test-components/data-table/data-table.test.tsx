/* eslint-disable @typescript-eslint/no-explicit-any */
import DataTable from "@/components/data-table/DataTable";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { downloadExcel } from "react-export-table-to-excel";

vi.mock("react-export-table-to-excel", () => ({
  downloadExcel: vi.fn(),
}));

const columns = [
  {
    id: "1",
    accessorKey: "Name",
    header: "name",
    cell: ({ row }: any) => <div>{row.name}</div>,
  },
];
const data = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Smith",
    correo_electronico: "john@example.com",
    telefono: 64829471,
    genero: "Hombre",
    fecha_de_nacimiento: new Date(2000, 12, 16),
    pais_de_nacimiento: "France",
    fecha_de_applicacion: new Date(2000, 12, 16),
    documento_de_identidad: "DNI",
    numero_documento_id: "Y2939789",
    tipo_documento_identidad: "passport",
    permiso: "Permiso de residencia y trabajo",
    direccion: "c/Barcelona 1234",
    ciudad: "Barcelona",
    provincia: "Barcelona",
    codigo_postal: 78953,
    pais_de_residencia: "España",
    programa_cursar:
      "Automatización de Tecnologías de la Información con Python",
    colectivo: ["Mujer en situación de vulnerabilidad", "Minorías étnicas"],
    educacion: "Estudios universitarios",
    situacion_profesional: "Empleada/o a tiempo completo",
    intereses_actuales:
      "Estoy interesada/o en formarme en competencias tecnológicas",
    dedicacion_semanal: 5,
    acceso_internet_dispositivos:
      "Acesso medio (tengo dispositivo y conexión a internet, a pesar de no ser de buena calidad)",
    formacion_online: false,
    razones_para_unir: "Lorem Ipsum",
    encontrar_programa: "Fundación Don Bosco o sus redes sociales",
    estado: "Aplicante",
    mas_informacion: "Lorem Ipsum",
    estudio_mas_alto: "masters",
  },
];

describe("DataTable Component", () => {
  test("renders the two buttons", () => {
    const { getByText } = render(<DataTable columns={columns} data={data} />);

    expect(getByText("seleccionados")).toBeTruthy();
    expect(getByText("todos")).toBeTruthy();
  });

  test("handles download selected", () => {
    const { getByText } = render(<DataTable columns={columns} data={data} />);

    fireEvent.click(getByText("seleccionados"));

    expect(downloadExcel).toHaveBeenCalledWith(
      expect.objectContaining({
        fileName: "Tabla de usuarios",
        sheet: "Usuarios",
      })
    );
  });

  test("handles download all", () => {
    const { getByText } = render(<DataTable columns={columns} data={data} />);

    fireEvent.click(getByText("todos"));

    expect(downloadExcel).toHaveBeenCalledWith(
      expect.objectContaining({
        fileName: "Tabla de usuarios",
        sheet: "Usuarios",
      })
    );
  });

  test("has the next and previous buttons on rendered", () => {
    render(<DataTable columns={columns} data={data} />);

    const prevButton = screen.getByText("Previous");
    const nextButton = screen.getByText("Next");

    expect(prevButton).toBeTruthy();
    expect(nextButton).toBeTruthy();
  });

  test("has the Columns button rendered", () => {
    render(<DataTable columns={columns} data={data} />);

    const columnsButton = screen.getByRole("button", { name: /columnas/i });

    expect(columnsButton).toBeTruthy();
  });

  test("opens and renders the columns menu with checkboxes", async () => {
    render(<DataTable columns={columns} data={data} />);

    const columnsButton = screen.getByRole("button", { name: /columnas/i });
      userEvent.click(columnsButton);
      await waitFor(() => {
        const checkboxes = document.querySelectorAll('.capitalize'); 
        checkboxes.forEach(checkbox => {
            expect(checkbox).toBeTruthy();
            expect(checkbox.classList.contains('checked')).toBe(true); 
        });
      });
  });
  test("has the input field for searching by selected filter", () => {
    render(<DataTable columns={columns} data={data} />);
    const filterInput = screen.getByRole("textbox");

    expect(filterInput).toBeTruthy();
  });
});
