/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "@/components/ui/Button";
import { ArrowUpDown } from "lucide-react";

describe("Table columns", () => {
   
  const columns = [
    {
      id: "select",
      header: ({ table }: any) => (
        <input type="checkbox" value={table.toggleAllPageRowsSelected} />
      ),
      accessorkey: "id",
      cell: ({ row }: any) => <input type="checkbox" value={row.original.id} />,
    },
    {
      accessorKey: "nombre",
      isSorted: false,
      toggleSorting: (isSorted: any, setSorted: any) => {
        setSorted(!isSorted);
      },
      getIsSorted: () => vi.fn(),
      header: ({ }: any) => {
        return (
          <Button
            variant="ghost"
            onClick={() => vi.fn()}
          >
            Nombre
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }: any) => (
        <div className="ml-4">{row.getValue("nombre")}</div>
      ),
    },
    {
        accessorKey: "apellidos",
        isSorted: false,
        toggleSorting: (isSorted: any, setSorted: any) => {
          setSorted(!isSorted);
        },
        getIsSorted: () => vi.fn(),
        header: ({ }: any) => {
          return (
            <Button
              variant="ghost"
              onClick={() => vi.fn()}
            >
              Apellidos
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }: any) => (
          <div className="ml-4">{row.getValue("apellidos")}</div>
        ),
      },
      {
          accessorKey: 'correo_electronico',
          toggleSorting: vi.fn(),
          getIsSorted: vi.fn(),
          header: ({ }:any) => {
              return (
                  <button onClick={() => vi.fn()}>
                      Email
                      <div className="ml-2 h-4 w-4" />
                  </button>
              );
          },
          cell: ({ row }:any) => {
              const handleEmailClick = () => vi.fn();
    
              return (
                  <div className="flex items-center space-x-2 ml-4">
                      <span onClick={handleEmailClick} className="cursor-pointer">
                          Mail
                      </span>
                      <span>{row.getValue('correo_electronico')}</span>
                  </div>
              );
          },
      },
     /*  {
        accessorKey: "telefono",
        header: "Telefono",
        cell: ({ row }:any) => (
          <div className="flex gap-2 items-center">
            <span className="text-green2 text-xl items-center cursor-pointer">
              <Modal
                textButton={mockIcon}
                nombre={row.getValue("nombre")}
                programa_cursar={row.getValue("programa_cursar")}
                apellidos={row.getValue("apellidos")}
                telefono={row.getValue("telefono")}
              />
            </span>
            <span>{row.getValue("telefono")}</span>
          </div>
        ),
      }, */
      {
        accessorKey: "programa_cursar",
        isSorted: false,
        toggleSorting: (isSorted: any, setSorted: any) => {
          setSorted(!isSorted);
        },
        getIsSorted: () => vi.fn(),
        header: ({ }: any) => {
          return (
            <Button
              variant="ghost"
              onClick={() => vi.fn()}
            >
              Programa a Cursar
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }: any) => (
          <div className="ml-4">{row.getValue("programa_cursar")}</div>
        ),
      },
      {
        accessorKey: "estado",
        isSorted: false,
        toggleSorting: (isSorted: any, setSorted: any) => {
          setSorted(!isSorted);
        },
        getIsSorted: () => vi.fn(),
        header: ({ }: any) => {
          return (
            <Button
              variant="ghost"
              onClick={() => vi.fn()}
            >
              Estado
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }: any) => (
          <div className="ml-4">{row.getValue("estado")}</div>
        ),
      },
      {
        accessorKey: "fecha_de_applicacion",
        isSorted: false,
        toggleSorting: (isSorted: any, setSorted: any) => {
          setSorted(!isSorted);
        },
        getIsSorted: () => vi.fn(),
        header: ({ }: any) => {
          return (
            <Button
              variant="ghost"
              onClick={() => vi.fn()}
            >
              Fecha de aplicación
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }: any) => (
          <div className="ml-4">{row.getValue("fecha_de_applicacion")}</div>
        ),
      },
    {
      id: "actions",
      accessorKey: "id",
      header: () => <div>Actions</div>,
      cell: () => <button>Actions</button>,
    },
  ];

  test('renders checkboxes in "Select" column', () => {
    const selectColumn = columns.find((column) => column.id === "select");
    if (selectColumn) {
      const { container } = render(selectColumn.header({ table: {} }));

      const selectAllCheckbox = container.querySelector(
        'input[type="checkbox"]'
      );

      const firstRowCheckbox = container.querySelector(
        'input[type="checkbox"][value]'
      );

      expect(selectAllCheckbox).toBeTruthy();
      expect(firstRowCheckbox).toBeTruthy();
    }
  });
  test('renders "Nombre" button in header', () => {
    const nombreColumn = columns.find(
      (column) => column.accessorKey === "nombre"
    );
    if (nombreColumn) {
      const { getByText } = render(
        nombreColumn.header({ column: nombreColumn })
      );
      const nombreButton = getByText("Nombre");
      expect(nombreButton).toBeTruthy();
    } else {
      expect(nombreColumn).toBeDefined();
    }
  });
  test('renders "Apellidos" button in header', () => {
    const apellidosColumn = columns.find(
      (column) => column.accessorKey === "apellidos"
    );
    if (apellidosColumn) {
      const { getByText } = render(
        apellidosColumn.header({ column: apellidosColumn })
      );
      const apellidosButton = getByText("Apellidos");
      expect(apellidosButton).toBeTruthy();
    } else {
      expect(apellidosColumn).toBeDefined();
    }
  });
  test('renders "Correo Electronico" button in header', () => {
    const correoColumn = columns.find(
      (column) => column.accessorKey === "correo_electronico"
    );
    if (correoColumn) {
      const { getByText } = render(
        correoColumn.header({ column: correoColumn })
      );
      const correoButton = getByText("Email");
      expect(correoButton).toBeTruthy();
    } else {
      expect(correoColumn).toBeDefined();
    }
  });
  /* test('renders "Telefono" button in header', () => {
    const telefonoColumn = columns.find(
        (column) => column.accessorKey === "telefono"
      );
      if (telefonoColumn) {
        const { getByText } = render(<span>{telefonoColumn.header}</span>); // Render the header string
        const telefonoButton = getByText("Telefono");
        expect(telefonoButton).toBeTruthy();
      } else {
        expect(telefonoColumn).toBeDefined();
      }
  }); */
    
  test('renders "Programa a Cursar" button in header', () => {
    const programaColumn = columns.find(
      (column) => column.accessorKey === "programa_cursar"
    );
    if (programaColumn) {
      const { getByText } = render(
        programaColumn.header({ column: programaColumn })
      );
      const programaButton = getByText("Programa a Cursar");
      expect(programaButton).toBeTruthy();
    } else {
      expect(programaColumn).toBeDefined();
    }
  });
  test('renders "Estado" button in header', () => {
    const estadoColumn = columns.find(
      (column) => column.accessorKey === "estado"
    );
    if (estadoColumn) {
      const { getByText } = render(
        estadoColumn.header({ column: estadoColumn })
      );
      const estadoButton = getByText("Estado");
      expect(estadoButton).toBeTruthy();
    } else {
      expect(estadoColumn).toBeDefined();
    }
  });
  test('renders "Fecha de aplicación" button in header', () => {
    const fechaColumn = columns.find(
      (column) => column.accessorKey === "fecha_de_applicacion"
    );
    if (fechaColumn) {
      const { getByText } = render(
        fechaColumn.header({ column: fechaColumn })
      );
      const fechaButton = getByText("Fecha de aplicación");
      expect(fechaButton).toBeTruthy();
    } else {
      expect(fechaColumn).toBeDefined();
    }
  });
  test('renders buttons in "actions" column', () => {
    const actionsColumn = columns.find((column) => column.id === "actions");
    if (actionsColumn) {
      const { getByText } = render(actionsColumn.cell({ row: {} }));
      const actionsButton = getByText("Actions");
      expect(actionsButton).toBeTruthy();
    }
  });

});