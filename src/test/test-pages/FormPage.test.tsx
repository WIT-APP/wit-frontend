/* eslint-disable @typescript-eslint/no-unused-vars */

import { describe, expect, test } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormPage } from "@/pages/FormPage";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

describe("Form questions - Personal", async () => {
  beforeEach(async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FormPage />
      </QueryClientProvider>
    );
  });
  test('should render question "Nombre"', async () => {
    const input = await waitFor(
      () => screen.getByLabelText("Nombre") as HTMLInputElement | null
    );
    expect(input).toBeTruthy();
    if (input) {
      expect(input.type).toBe("text");
      expect(input.name).toBe("nombre");
    }
  });

  test('should render question "Apellidos"', async () => {
    await waitFor(() => {
      const inputLastname = screen.getByLabelText(
        "Apellidos"
      ) as HTMLInputElement | null;
      expect(inputLastname).toBeTruthy();

      if (inputLastname) {
        inputLastname.textContent = "Saiz";
        expect(inputLastname.textContent).toBe("Saiz");
        expect(inputLastname.type).toBe("text");
        expect(inputLastname.name).toBe("apellidos");
      }
    });
  });
  test('should render question "Correo Electronico"', async () => {
    await waitFor(() => {
      const emailInput = screen.getByLabelText(
        "Correo electrónico"
      ) as HTMLInputElement | null;
      expect(emailInput).toBeTruthy();

      if (emailInput) {
        emailInput.value = "example@example.com";
        userEvent.type(emailInput, "example@example.com");
        expect(emailInput.value).toBe("example@example.com");
        expect(emailInput.type).toBe("text");
        expect(emailInput.name).toBe("correo_electronico");
      }
    });
  });
  test('should render question "Número de teléfono"', async () => {
    await waitFor(() => {
      const phoneInput = screen.getByLabelText(
        "Número de teléfono"
      ) as HTMLInputElement | null;
      expect(phoneInput).toBeTruthy();

      if (phoneInput) {
        phoneInput.value = "123456789";
        userEvent.type(phoneInput, "123456789");
        expect(phoneInput.value).toBe("123456789");
        expect(phoneInput.type).toBe("text");
        expect(phoneInput.name).toBe("telefono");
      }
    });
  });
  test('should render question "¿Cómo describirías tu género?"', async () => {
    await waitFor(() => {
      const selectField = screen.getByLabelText(
        "¿Cómo describirías tu género?"
      ) as HTMLSelectElement | null;
      expect(selectField).toBeTruthy();

      if (selectField) {
        expect(selectField.options).toHaveLength(5);
        expect(selectField.options[0].text).toBe("Selecciona una opción");
        expect(selectField.options[1].text).toBe("Hombre");
        expect(selectField.options[2].text).toBe("Mujer");
        expect(selectField.options[3].text).toBe("Otro");
        expect(selectField.options[4].text).toBe("Prefiero no identificarme");

        selectField.value = "Hombre";
        expect(selectField.value).toBe("Hombre");
      }
    });
  });
  test('should render question "¿Cuál es tu fecha de nacimiento?"', async () => {
    await waitFor(() => {
      const dateInput = screen.getByLabelText(
        "¿Cuál es tu fecha de nacimiento?"
      ) as HTMLInputElement | null;
      expect(dateInput).toBeTruthy();

      if (dateInput) {
        expect(dateInput.type).toBe("date");
        expect(dateInput.name).toBe("fecha_de_nacimiento");

        dateInput.value = "2000-01-01";
        expect(dateInput.value).toBe("2000-01-01");
      }
    });
  });
  test('should render question "País de Nacimiento" with correct options', async () => {
    await waitFor(() => {
      const selectField = screen.getByLabelText(
        "¿Cuál es tu país de nacimiento?"
      ) as HTMLSelectElement;
      expect(selectField).toBeTruthy();

      expect(selectField?.options).toHaveLength(195);

      expect(selectField?.options[0].text).toBe("Selecciona una opción");
      expect(selectField?.options[1].text).toBe("Afganistán");
      expect(selectField?.options[2].text).toBe("Albania");

      userEvent.selectOptions(selectField, "Albania");
      expect(selectField?.value).toBe("Albania");
    });
  });

  test('should render question "Documento de identidad" with correct options', async () => {
    const documentoIdentidad = screen.getByText("Documento de identidad");
    expect(documentoIdentidad).toBeTruthy();

    const dniOption = screen.getByText("DNI");
    expect(dniOption).toBeTruthy();

    const nieOption = screen.getByText("NIE");
    expect(nieOption).toBeTruthy();

    const otroOption = screen.getAllByText("Otro")[1];
    expect(otroOption).toBeTruthy();
  });

  test('should render question "Escribe el número de tu documento de identidad"', async () => {
    await waitFor(() => {
      const documentNumberInput = screen.getAllByText(
        "Escribe el numero de tu documento identidad"
      );
      expect(documentNumberInput).toBeTruthy();
    });
  });
  test('should render question "En caso de tener otro, tipo de documento indícanos qué tipo de documento de identidad"', async () => {
    await waitFor(() => {
      const documentOtroInput = screen.getAllByText(
        "En caso de tener otro, tipo de documento indícanos qué tipo de documento de identidad"
      );
      expect(documentOtroInput).toBeTruthy();
    });
  });
  test('should render question "En caso de tener nacionalidad extranjera, indica el carácter de tu permiso en España:"', async () => {
    await waitFor(() => {
      const documentNIEInput = screen.getAllByText(
        "En caso de tener nacionalidad extranjera, indica el carácter de tu permiso en España:"
      );
      expect(documentNIEInput).toBeTruthy();
    });
  });
  describe("Personal - Buttons", () => {
    test("should render Next Page button", () => {
      const nextPageButton = screen.getByTestId("next-page-button");
      expect(nextPageButton).toBeTruthy();
    });
  });

  afterEach(() => {
    cleanup();
  });
});
const navigateToPage = async (targetPage: string) => {
  const pages = ["Personal", "Sociodemografica", "Academica", "Formacion"];
  render(
    <QueryClientProvider client={queryClient}>
      <FormPage />
    </QueryClientProvider>
  );
  const targetPageIndex = pages.findIndex((page) => page === targetPage);
  for (let i = 0; i < targetPageIndex; i++) {
    const nextPageButton = screen.getByTestId("next-page-button");
    userEvent.click(nextPageButton);
    await waitFor(() => {
      const pageHeader = screen.getByText(`Sección ${pages[i + 1]}`);
      expect(pageHeader).toBeTruthy();
    });
  }
};

describe("Form Questions - Sociodemografica", async () => {
  beforeEach(async () => {
    navigateToPage("Sociodemografica");
  });

  test('should render the question "¿Cuál es tu dirección de residencia?"', async () => {
    await waitFor(() => {
      const input = screen.getByLabelText(
        "¿Cuál es tu dirección de residencia?"
      ) as HTMLInputElement | null;
      expect(input).toBeTruthy();

      expect(input?.type).toBe("text");
      expect(input?.name).toBe("direccion");
    });
  });

  test('should render the question "¿En qué ciudad resides?"', async () => {
    await waitFor(() => {
      const input = screen.getByLabelText(
        "¿En qué ciudad resides?"
      ) as HTMLInputElement | null;
      expect(input).toBeTruthy();

      expect(input?.type).toBe("text");
      expect(input?.name).toBe("ciudad");
    });
  });
  test('should render the question "¿En qué província resides?"', async () => {
    await waitFor(() => {
      const input = screen.getByLabelText(
        "¿En qué província resides?"
      ) as HTMLInputElement | null;
      expect(input).toBeTruthy();

      expect(input?.type).toBe("text");
      expect(input?.name).toBe("provincia");
    });
  });
  test('should render question "¿En qué país resides?" with correct options', async () => {
    await waitFor(() => {
      const selectField = screen.getByLabelText(
        "¿En qué país resides?"
      ) as HTMLSelectElement;
      expect(selectField).toBeTruthy();

      expect(selectField?.options).toHaveLength(195);

      expect(selectField?.options[0].text).toBe("Selecciona una opción");
      expect(selectField?.options[1].text).toBe("Afganistán");
      expect(selectField?.options[2].text).toBe("Albania");

      userEvent.selectOptions(selectField, "Albania");
      expect(selectField?.value).toBe("Albania");
    });
  });
  test('should render the question "Código postal"', async () => {
    await waitFor(() => {
      const input = screen.getByLabelText(
        "Código postal"
      ) as HTMLInputElement | null;
      expect(input).toBeTruthy();

      expect(input?.type).toBe("text");
      expect(input?.name).toBe("codigo_postal");
    });
  });
  test('should render the question "¿Te identificarías con alguno de los siguientes colectivos?" with correct options', async () => {
    await waitFor(() => {
      const colectivoQuestion = screen.getByText(
        "¿Te identificarías con alguno de los siguientes colectivos?"
      ) as HTMLSelectElement;
      expect(colectivoQuestion).toBeTruthy();

      expect(
        screen.getByText("Mujer en situación de vulnerabilidad")
      ).toBeTruthy();
      expect(screen.getByText("Minorías étnicas")).toBeTruthy();
      expect(screen.getByText("Inmigrante o refugiada/o")).toBeTruthy();
      expect(
        screen.getByText("Joven sin titulación y sin empleo")
      ).toBeTruthy();
      expect(
        screen.getByText(
          "Desempleada/o de larga duración o debido a la crisis del Covid-19"
        )
      ).toBeTruthy();
      expect(screen.getByText("Grupo de edad > 50 años")).toBeTruthy();
      expect(screen.getByText("Cabeza de familia monoparental")).toBeTruthy();
      expect(
        screen.getByText(
          "No me identifico con ninguna de las opciones anteriores"
        )
      ).toBeTruthy();
    });
  });
  describe("Sociodemografica - Buttons", () => {
    test("should render Previous Page button", async () => {
      const previousPageButton = await waitFor(() =>
        screen.getByTestId("previous-page-button")
      );
      expect(previousPageButton).toBeTruthy();
    });

    test("should render Next Page button", async () => {
      const nextPageButton = await waitFor(() =>screen.getByText("Siguiente"));
      expect(nextPageButton).toBeTruthy();
    });
  });

  afterEach(() => {
    cleanup();
  });
});

describe("Form Questions - Academica", async () => {
  beforeEach(() => {
    navigateToPage("Academica");
  });
  test("should render question '¿Cuál es tu nivel de estudios más alto?' with correct options", async () => {
    await waitFor(() => {
      const educationQuestion = screen.getByText(
        "¿Cúal es tu nivel de estudios más alto?"
      ) as HTMLInputElement;
      expect(educationQuestion).toBeTruthy();

      const options = [
        "Sin estudios o estudios primarios sin finalizar",
        "Estudios primarios",
        "Estudios secundarios",
        "Formación profesional",
        "Estudios universitarios",
        "Otro",
      ];

      options.forEach((option) => {
        expect(screen.getByText(option)).toBeTruthy();
      });
    });
  });
  test("should render question 'Indica cuál es la titulación académica más alta que has obtenido' with an input field", async () => {
    await waitFor(() => {
      const tituloQuestion = screen.getByLabelText(
        "Indica cúal es la titulación académica más alta que has obtenido"
      ) as HTMLInputElement;
      expect(tituloQuestion).toBeTruthy();
      expect(tituloQuestion.type).toBe("text");
      expect(tituloQuestion.name).toBe("estudio_mas_alto");
    });
  });

  test("should render question '¿En qué situación profesional te encuentras?' with correct radio options", async () => {
    const situacionProfesionalQuestion = await waitFor(
      () =>
        screen.getByText(
          "¿En qué situación profesional te encuentras?"
        ) as HTMLInputElement
    );

    expect(situacionProfesionalQuestion).toBeTruthy();
    //expect(situacionProfesionalQuestion?.type).toBe("radio");
    //expect(situacionProfesionalQuestion?.name).toBe("situacion_profesional")

    const options = [
      "Desempleada/o sin ingresos",
      "Desempleada/o con subsidio por desempleo",
      "Empleada/o a tiempo completo",
      "Empleada/o a tiempo parcial",
      "Autónoma/o",
      "Estudiante",
      "Otra",
    ];
    expect(options).toHaveLength(7);
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeTruthy();
    });
  });
  describe("Academica - Buttons", () => {
    test("should render Previous Page button", async () => {
      const previousPageButton = await waitFor(() =>
        screen.getByTestId("previous-page-button")
      );
      expect(previousPageButton).toBeTruthy();
    });

    test("should render Next Page button", () => {
      const nextPageButton = screen.getByTestId("next-page-button");
      expect(nextPageButton).toBeTruthy();
    });
  });
  afterEach(() => {
    cleanup();
  });
});

describe("Form Questions - Formacion", async () => {
  beforeEach(async () => {
    navigateToPage("Formacion");
  });
  test("should render question '¿Qué programa quieres cursar?' with correct radio options", async () => {
    
      const programaCursarQuestion = await waitFor(() => screen.getByText(
        "¿Qué programa quieres cursar?"
      ) as HTMLSelectElement);

      expect(programaCursarQuestion).toBeTruthy();
      /* expect(programaCursarQuestion.type).toBe("radio");
      expect(programaCursarQuestion.name).toBe("programa_cursar"); */
      const option1 = screen.getByLabelText(
        "Soporte de Tecnologías de la Información"
      );
      const option2 = screen.getByLabelText(
        "Automatización de Tecnologías de la Información con Python"
      );

      expect(option1).toBeTruthy();
      expect(option2).toBeTruthy();

  });
  test("should render question 'Escoge la opcion que mejor se ajuste a tus intereses actuales' with correct radio options", async () => {
    await waitFor(() => {
      const interesesActualesQuestion = screen.getByText(
        "Escoge la opcion que mejor se ajuste a tus intereses actuales"
      ) as HTMLSelectElement;

      expect(interesesActualesQuestion).toBeTruthy();
      /* expect(interesesActualesQuestion.type).toBe("radio");
      expect(interesesActualesQuestion.name).toBe("intereses_actuales"); */

      const option1 = screen.getByLabelText(
        "Estoy interesada/o en formarme en competencias tecnológicas"
      ) as HTMLInputElement;
      const option2 = screen.getByLabelText(
        "Estoy interesada/o en obtener un empleo del sector tecnológico"
      ) as HTMLInputElement;
      const option3 = screen.getByLabelText(
        "Necesito formarme para conseguir un empleo estable"
      ) as HTMLInputElement;
      const option4 = screen.getByLabelText(
        "Quiero cambiar de sector profesional"
      ) as HTMLInputElement;
      const option5 = screen.getByLabelText("Otra") as HTMLInputElement;

      expect(option1).toBeTruthy();
      expect(option2).toBeTruthy();
      expect(option3).toBeTruthy();
      expect(option4).toBeTruthy();
      expect(option5).toBeTruthy();

      expect(option1.value).toBe(
        "Estoy interesada/o en formarme en competencias tecnológicas"
      );
      expect(option2.value).toBe(
        "Estoy interesada/o en obtener un empleo del sector tecnológico"
      );
      expect(option3.value).toBe(
        "Necesito formarme para conseguir un empleo estable"
      );
      expect(option4.value).toBe("Quiero cambiar de sector profesional");
      expect(option5.value).toBe("Otra");
    });
  });
  test('should render the question "¿Qué dedicación semanal tendrías para el proceso de formación?" with the correct text input', async () => {
    await waitFor(() => {
      const dedicacionSemanalInput = screen.getByText(
        "¿Qué dedicación semanal tendrías para el proceso de formación?"
      ) as HTMLInputElement | null;

      expect(dedicacionSemanalInput).toBeTruthy();
      /* expect(dedicacionSemanalInput?.type).toBe('text');
            expect(dedicacionSemanalInput?.name).toBe('dedicacion_semanal'); */
    });
  });
  test('should render the question "¿Cómo describirías tu acceso a internet y a dispositivos tecnológicos?" with correct options', async () => {
    await waitFor(() => {
      const accessQuestion = screen.getByText(
        "¿Cómo describirías tu acceso a internet y a dispositivos tecnológicos (ordenador, tablet…)?"
      );
      expect(accessQuestion).toBeTruthy();

      const optionsText = [
        "Sin acceso (no tengo conexión a internet ni dispositivo)",
        "Acceso muy limitado (tengo dispositivo pero no tengo internet)",
        "Acceso limitado (tengo dispositivo e internet limitado)",
        "Acesso medio (tengo dispositivo e internet de baja calidad)",
        "Buen acceso (tengo buena conexion a internet y dispositivo)",
      ];

      optionsText.forEach((option) => {
        expect(option).toBeTruthy();
      });
    });
  });
  test('should render the question "Explicanos brevemente las razones por las que te gustaría unirte a esta formación" with correct textarea', async () => {
    await waitFor(() => {
      const textareaQuestion = screen.getByText(
        "Explicanos brevemente las razones por las que te gustaria unirte a esta formación"
      );
      expect(textareaQuestion).toBeTruthy();
    });
  });

  test('should render the question "¿Cómo has encontrado este programa?" with correct options', async () => {
    await waitFor(() => {
      const accessQuestion = screen.getByText(
        "¿Cómo has encontrado este programa?"
      );
      expect(accessQuestion).toBeTruthy();

      const optionsText = [
        "Redes sociales",
        "Somos F5",
        "Factoria F5",
        "Fundación Don Bosco o sus redes sociales",
        "Buscadores de internet (Google)",
      ];

      optionsText.forEach((option) => {
        const radio = screen.getByText(option) as HTMLInputElement;
        expect(radio).toBeTruthy();
        /*  expect(radio.type).toBe("radio");
        expect(radio.name).toBe("encontrar_programa"); */
      });
    });
  });
  test('should render the question "¿Quieres añadir alguna información que consideres relevante?" with correct textarea', async () => {
    await waitFor(() => {
      const textareaQuestion = screen.getByText(
        "¿Quieres añadir alguna información que consideres relevante?"
      );

      expect(textareaQuestion).toBeTruthy();
    });
  });

  test('should render the question "¿Has hecho alguna vez una formación online?" with correct toggle options', async () => {
    await waitFor(() => {
      const formacionOnlineQuestion = screen.getByText(
        "¿Has hecho alguna vez una formación online?"
      );
      expect(formacionOnlineQuestion).toBeTruthy();

      const toggleOptions = screen.getAllByRole("checkbox");
      expect(toggleOptions).toHaveLength(1);

      toggleOptions.forEach((toggle) => {
        const label = toggle.closest("label");
        expect(label).toBeTruthy();
      });
    });
  });

  afterEach(() => {
    cleanup();
  });
  describe("Formacion - Buttons", () => {
    test("should render Previous Page button", async () => {
      const previousPageButton = await waitFor(() =>
        screen.getByTestId("previous-page-button")
      );
      expect(previousPageButton).toBeTruthy();
    });

    test("should render Next Page button", () => {
      const nextPageButton = screen.getByTestId("next-page-button");
      expect(nextPageButton).toBeTruthy();
    });

     test("should render Send button", async () => {
      const sendButton = await waitFor(() =>
        screen.getByTestId("submit-form-button")
      );
      expect(sendButton).toBeTruthy();
    }); 
  });
});
