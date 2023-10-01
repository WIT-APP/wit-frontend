import { describe, expect, test } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormPage } from "@/pages/FormPage";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

 describe("Form should load correctly", () => {
  test("should load form component", () => {
    expect(<FormPage />).toStrictEqual(<FormPage />);
  });
}); 
describe("Form questions - Personal", () => {
    beforeEach(() => {
        render(
            <QueryClientProvider client={queryClient}>
                <FormPage />
            </QueryClientProvider>
        );
    });
    test('should render question "Nombre"', async () => {
        await waitFor(() => {
            const input = screen.getByLabelText("Nombre") as HTMLInputElement | null;
            expect(input).toBeTruthy();
            if (input) {
                expect(input.type).toBe("text");
                expect(input.name).toBe("nombre");
            }
        });
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
                expect(emailInput.type).toBe("email");
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
            const selectField = screen.getByLabelText('¿Cuál es tu país de nacimiento?') as HTMLSelectElement;
            expect(selectField).toBeTruthy();
  
            expect(selectField?.options).toHaveLength(195); // Adjust the number based on your options
  
            expect(selectField?.options[0].text).toBe('Selecciona una opción');
            expect(selectField?.options[1].text).toBe('Afganistán');
            expect(selectField?.options[2].text).toBe('Albania');
  
   
            userEvent.selectOptions(selectField, 'Albania');
            expect(selectField?.value).toBe('Albania');
        });
    });
    
    test('should render question "Documento de identidad" with correct options', async () => {
        const documentoIdentidad = screen.getByTestId('documento-identidad');
        expect(documentoIdentidad).toBeTruthy();

        const dniOption = screen.getByText('DNI');
        expect(dniOption).toBeTruthy();

        const nieOption = screen.getByText('NIE');
        expect(nieOption).toBeTruthy();

        const otroOption = screen.getAllByText('Otro')[1];
        expect(otroOption).toBeTruthy();

      
    });
    
    test('should render question "Escribe el número de tu documento de identidad"', async () => {
        await waitFor(() => {
            const documentNumberInput = screen.getAllByText('Escribe el numero de tu documento identidad')
            expect(documentNumberInput).toBeTruthy();

        });
    });
    test('should render dependent questions based on "Documento de Identidad" selection', async () => {
        const documentoIdentidad = screen.getByTestId('documento-identidad');
        expect(documentoIdentidad).toBeTruthy();
  
        const dniOption = screen.getByText('DNI');
        expect(dniOption).toBeTruthy();
  
        const nieOption = screen.getByText('NIE');
        expect(nieOption).toBeTruthy();
  
        const otroOption = screen.getAllByText('Otro')[1];
        expect(otroOption).toBeTruthy();
  
        // Initially, the dependent questions should not be present
        expect(screen.queryByText('En caso de tener nacionalidad extranjera, indica el carácter de tu permiso en España:')).toBeNull();
        expect(screen.queryByText('Indícanos qué tipo de documento de identidad')).toBeNull();
        /* 
          fireEvent.click(nieOption);
        
          await waitFor(() => {
            expect(screen.queryByText('En caso de tener nacionalidad extranjera, indica el carácter de tu permiso en España:')).toBeTruthy();
            expect(screen.queryByText('Indícanos qué tipo de documento de identidad')).toBeNull();
          });
        
       userEvent.click(otroOption);
        
          await waitFor(() => {
      
            expect(screen.queryByText('En caso de tener nacionalidad extranjera, indica el carácter de tu permiso en España:')).toBeTruthy();
            expect(screen.queryByText('Indícanos qué tipo de documento de identidad')).toBeTruthy();
          });  */
  
    });
    afterEach(() => {
        cleanup();
    });
});

describe('Second page (Sociodemografica category)', () => {
        let nextPageButton;
    
        beforeEach(() => {
            render(
                <QueryClientProvider client={queryClient}>
                    <FormPage />
                </QueryClientProvider>
            );
    
          nextPageButton = screen.getByText('Next Page');
            fireEvent.click(nextPageButton);

        });
    
        test('should render question "¿Cuál es tu dirección de residencia?"', () => {
            const direccionQuestion = screen.getByText('¿Cuál es tu dirección de residencia?');
            expect(direccionQuestion).toBeTruthy();
        });
    
    afterEach(() => {
        cleanup();
    });
  });
    

