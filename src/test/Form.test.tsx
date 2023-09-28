import { describe, expect, test } from "vitest";
import { render,screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormPage } from "../pages/FormPage";

const queryClient = new QueryClient();

describe('Form should load correctly', () => {
    test('should load form component', () => {
        expect(<FormPage/>).toStrictEqual(<FormPage/>);
    });
});

describe('Form should load all questions from the queryclient', () => {
    test('Render question "Nombre"', async () => {
    // Render the component with the query provider
    render(
        <QueryClientProvider client={queryClient}>
        <FormPage />
        </QueryClientProvider>
    );

    // Use waitFor to wait for the data to load
    await waitFor(() => {
        
        // Add your assertions here
        const input:HTMLInputElement = screen.getByLabelText('Nombre');
        expect(input).toBeTruthy();

        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'Carlos Saiz'
            expect(input.textContent).toBe('Carlos Saiz')

            // prueba el type prop
            expect(input.type).toBe('text')

            // prueba el name prop
            expect(input.name).toBe('name')

            // prueba el value prop
            // userEvent.type(input, 'Carlos Saiz');
            // expect(input.value).toBe('Carlos Saiz')
        }
    });
    });
    test('Render question "Apellidos"', async () => {
        // Render the component with the query provider
        render(
            <QueryClientProvider client={queryClient}>
            <FormPage />
            </QueryClientProvider>
        );
    
        // Use waitFor to wait for the data to load
        await waitFor(() => {
            
            // Add your assertions here
            const inputLastname = document.querySelector(
                '#lastname'
            ) as HTMLInputElement | null;
            expect(inputLastname).toBeTruthy();
    
            expect(inputLastname?.textContent).toBe('')
    
            if (inputLastname) {
             // prueba el input text
             inputLastname.textContent = 'Saiz'
            expect(inputLastname.textContent).toBe('Saiz')
    
             // prueba el type prop
            expect(inputLastname.type).toBe('text')
    
            //  prueba el name prop
            expect(inputLastname.name).toBe('lastname')
    
            //     // prueba el value prop
            //     userEvent.type(input, 'Carlos Saiz');
            //     // expect(input.value).toBe('Carlos Saiz')
            }
        });
        });
});



// describe('Expect an input that is Correo electronico', () => {
//     test('The input field and its props of Correo electronico', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector(
//             '#correo_electronico'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(input).toBeTruthy()

//         // está vacio?
//         expect(input?.textContent).toBe('')

//         if (input) {
//             // prueba el input text
//             input.textContent = 'carlos@mail.com'
//             expect(input.textContent).toBe('carlos@mail.com')

//             // prueba el type prop
//             expect(input.type).toBe('email')

//             // prueba el name prop
//             expect(input.name).toBe('correo_electronico')

//             // prueba el value prop
//             fireEvent.change(input, {
//                 target: {
//                     value: 'carlos@mail.com'
//                 }
//             })
//             expect(input.value).toBe('carlos@mail.com')

//         }
//     });

// });
// describe('Se espera un input que es la fecha de nacimiento', () => {
//     test('The input field and its props of fecha de nacimiento', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector(
//             '#fecha_de_nacimiento'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(input).toBeTruthy()

//         // está vacio?
//         expect(input?.textContent).toBe('')

//         if (input) {
//             // prueba el input text
//             input.textContent = '25/07/1985'
//             expect(input.textContent).toBe('25/07/1985')

//             // prueba el type prop
//             expect(input.type).toBe('date')

//             // prueba el name prop
//             expect(input.name).toBe('fecha_de_nacimiento')

//             // prueba el value prop
//             fireEvent.change(input, {
//                 target: {
//                     value: '25/07/1985'
//                 }
//             })
//             expect(input.value).toBe('')

//         }
//     });

// });

// describe('Expect an input that is Telefono de contacto', () => {
//     test('The input field and its props of Telefono de contacto', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector(
//             '#telefono'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(input).toBeTruthy()

//         // está vacio?
//         expect(input?.textContent).toBe('')

//         if (input) {
//             // prueba el input text
//             input.textContent = '696753759'
//             expect(input.textContent).toBe('696753759')

//             // prueba el type prop
//             expect(input.type).toBe('number')

//             // prueba el name prop
//             expect(input.name).toBe('telefono')

//             // prueba el value prop
//             fireEvent.change(input, {
//                 target: {
//                     value: '696753759'
//                 }
//             })
//             expect(input.value).toBe('696753759')

//         }
//     });

// });







// describe('Se espera un select desplegable con opciones de género', () => {
//     test('El desplegable tiene estas opciones', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <FormPage />
//             </QueryClientProvider>
//         );
//         const select = document.querySelector('#genero') as HTMLSelectElement | null;
//         // Check if the select dropdown exists in the form component
//         expect(select).toBeTruthy()
//         // Check if the select dropdown is initially empty
//         expect(select?.value).toBe('')
//         if (select) {
//             // Simulate selecting an option with the value "rigatoni"
//             fireEvent.change(select, { target: { value: 'Hombre' } })
//             // Check if the selected option in the dropdown is "rigatoni"
//             expect(select.value).toBe('Hombre')
//             // Simulate selecting an option with the value "dave"
//             fireEvent.change(select, { target: { value: 'Mujer' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Mujer')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Otro' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Otro')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Prefiero no identificarme' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Prefiero no identificarme')
//             // Similarly, you can simulate selecting options with other values

//         }
//     });
// });



// describe('Se espera un select radio para seleccionar el documento de identidad', () => {
//     test('El select radio tiene estas opciones', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const dniLabel = document.querySelector('label[for=dni]');
//         const nieLabel = document.querySelector('label[for=nie]');
//         const otroLabel = document.querySelector('label[for=otro]');

//         if (dniLabel && nieLabel && otroLabel) {
//             expect(dniLabel.textContent).toBe('DNI');
//             expect(nieLabel.textContent).toBe('NIE');
//             expect(otroLabel.textContent).toBe('Otro');

//             // Test the type prop
//             const dniInput = dniLabel.querySelector('input[type=radio]');
//             const nieInput = nieLabel.querySelector('input[type=radio]');
//             const otroInput = otroLabel.querySelector('input[type=radio]');

//             expect(dniInput).toBeTruthy();
//             expect(nieInput).toBeTruthy();
//             expect(otroInput).toBeTruthy();

//             // Test the name prop
//             expect(dniInput?.name).toBe('identidad');
//             expect(nieInput?.name).toBe('identidad');
//             expect(otroInput?.name).toBe('identidad');

//             // Test the value prop
//             fireEvent.click(dniInput);
//             expect(dniInput?.checked).toBe(true);
//             expect(nieInput?.checked).toBe(false);
//             expect(otroInput?.checked).toBe(false);

//             fireEvent.click(nieInput);
//             expect(dniInput?.checked).toBe(false);
//             expect(nieInput?.checked).toBe(true);
//             expect(otroInput?.checked).toBe(false);

//             fireEvent.click(otroInput);
//             expect(dniInput?.checked).toBe(false);
//             expect(nieInput?.checked).toBe(false);
//             expect(otroInput?.checked).toBe(true);
//         }
//     });
// });


// describe("Expect an input that is tipo de documento", () => {
//     test("The input field and its props of tipo de documento", () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector('#tipo') as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(input).toBeTruthy();

//         if (input) {
//             // prueba el input text
//             fireEvent.change(input, { target: { value: 'Otro documento' } });
//             expect(input.value).toBe('Otro documento');

//             // prueba el type prop
//             expect(input.type).toBe('text');

//             // prueba el name prop
//             expect(input.name).toBe('tipo');
//         }
//     });
// });

// describe("Expect an select that is carácter de permiso en España", () => {
//     test("The select field and its props of permiso en España", () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const select = document.querySelector(
//             "#permiso"
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(select).toBeTruthy();

//         // está vacio?
//         expect(select?.value).toBe("");

//         if (select) {
//             // Simulate selecting an option with the value "rigatoni"
//             fireEvent.change(select, {
//                 target: { value: "Permiso de residencia y trabajo" },
//             });
//             // Check if the selected option in the dropdown is "rigatoni"
//             expect(select.value).toBe("Permiso de residencia y trabajo");
//             // Simulate selecting an option with the value "dave"
//             fireEvent.change(select, { target: { value: "Permiso de residencia y estudios" } });
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe("Permiso de residencia y estudios");
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, {
//                 target: { value: "No dispongo de permiso (No es un problema para tener acceso al curso)" },
//             });
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe("No dispongo de permiso (No es un problema para tener acceso al curso)");
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, {
//                 target: { value: "Otro" },
//             });
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe("Otro");

//         }
//     });
// });




// describe('Expect an input that is Cual es tu direccion de residencia', () => {
//     test('The input field and its props of residencia', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector(
//             '#direccion'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(input).toBeTruthy()

//         // está vacio?
//         expect(input?.textContent).toBe('')

//         if (input) {
//             // prueba el input text
//             input.textContent = 'C/Montblanc n-1 3-2'
//             expect(input.textContent).toBe('C/Montblanc n-1 3-2')

//             // prueba el type prop
//             expect(input.type).toBe('textarea')

//             // prueba el name prop
//             expect(input.name).toBe('direccion')

//             // prueba el value prop
//             fireEvent.change(input, {
//                 target: {
//                     value: 'C/Montblanc n-1 3-2'
//                 }
//             })
//             expect(input.value).toBe('C/Montblanc n-1 3-2')

//         }
//     });

// });

// describe('Se espera un input en que ciudad resides', () => {
//     test('The input field and its props of residencia', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector(
//             '#ciudad'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(input).toBeTruthy()

//         // está vacio?
//         expect(input?.textContent).toBe('')

//         if (input) {
//             // prueba el input text
//             input.textContent = 'Sant Cugat'
//             expect(input.textContent).toBe('Sant Cugat')

//             // prueba el type prop
//             expect(input.type).toBe('text')

//             // prueba el name prop
//             expect(input.name).toBe('ciudad')

//             // prueba el value prop
//             fireEvent.change(input, {
//                 target: {
//                     value: 'Sant cugat'
//                 }
//             })
//             expect(input.value).toBe('Sant cugat')

//         }
//     });

// });

// describe('Expect an input that is en que provincia resides', () => {
//     test('The input field and its props of provincia', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector(
//             '#provincia'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(input).toBeTruthy()

//         // está vacio?
//         expect(input?.textContent).toBe('')

//         if (input) {
//             // prueba el input text
//             input.textContent = 'Barcelona'
//             expect(input.textContent).toBe('Barcelona')

//             // prueba el type prop
//             expect(input.type).toBe('text')

//             // prueba el name prop
//             expect(input.name).toBe('provincia')

//             // prueba el value prop
//             fireEvent.change(input, {
//                 target: {
//                     value: 'Barcelona'
//                 }
//             })
//             expect(input.value).toBe('Barcelona')

//         }
//     });

// });

// describe('Expect an input that is codigo postal', () => {
//     test('The input field and its props of codigo postal', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector(
//             '#codigo_postal'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(input).toBeTruthy()

//         // está vacio?
//         expect(input?.textContent).toBe('')

//         if (input) {
//             // prueba el input text
//             input.textContent = '08172'
//             expect(input.textContent).toBe('08172')

//             // prueba el type prop
//             expect(input.type).toBe('number')
//             // prueba el name prop
//             expect(input.name).toBe('codigo_postal')

//             // prueba el value prop
//             fireEvent.change(input, {
//                 target: {
//                     value: '08172'
//                 }
//             })
//             expect(input.value).toBe('08172')

//         }
//     });

// });


// describe('Expect an select that is indicanos que programa quiere cursar', () => {
//     test('The select field and its props of programa quiere cursar', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const select = document.querySelector(
//             '#programa_cursar'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(select).toBeTruthy()
//         // está vacio?
//         expect(select).toBeTruthy();

//         if (select) {
//             // Simulate selecting an option with the value "Soporte de Tecnologías de la Información"
//             fireEvent.change(select, {
//                 target: { value: 'Soporte de Tecnologías de la Información' },
//             });
//             // Check if the selected option in the dropdown is "Soporte de Tecnologías de la Información"
//             expect(select.value).toBe('Soporte de Tecnologías de la Información');

//             // Simulate selecting an option with the value "Automatización de Tecnologías de la Información con Python"
//             fireEvent.change(select, {
//                 target: { value: 'Automatización de Tecnologías de la Información con Python' },
//             });
//             // Check if the selected option in the dropdown is "Automatización de Tecnologías de la Información con Python"
//             expect(select.value).toBe(
//                 'Automatización de Tecnologías de la Información con Python'
//             );
//         }
//     });
// });

// describe('Expect an select that is te identificarias con alguno de los siguientes colectivos', () => {
//     test('The select field and its props of te identificarias con alguno de los siguientes colectivos', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const select = document.querySelector(
//             '#colectivos'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(select).toBeTruthy()

//         // está vacio?
//         expect(select?.value).toBe('')

//         if (select) {
//             // Simulate selecting an option with the value "rigatoni"
//             fireEvent.change(select, { target: { value: 'mujer en situación de vulnerabilidad' } })
//             // Check if the selected option in the dropdown is "rigatoni"
//             expect(select.value).toBe('mujer en situación de vulnerabilidad')
//             // Simulate selecting an option with the value "dave"
//             fireEvent.change(select, { target: { value: 'minorías étnicas' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('minorías étnicas')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'inmigrante o refugiado/a' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('inmigrante o refugiado/a')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'joven sin titulación y sin empleo' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('joven sin titulación y sin empleo')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'desempleada/o de larga duración o debido a la crisis del Covid-19' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('desempleada/o de larga duración o debido a la crisis del Covid-19')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'grupo de edad > 50 años' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('grupo de edad > 50 años')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'cabeza de familia monoparental' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('cabeza de familia monoparental')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'no me identifico con ninguna de las opciones anteriores' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('no me identifico con ninguna de las opciones anteriores')
//         }
//     });
// });


// describe('Expect an select that is indicanos cual es tu titulacion academica mas alta que has obtenido', () => {
//     test('The select field and its props of titulacion academica', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const select = document.querySelector(
//             '#educacion'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(select).toBeTruthy()

//         // está vacio?
//         expect(select?.value).toBe('')

//         if (select) {
//             // Simulate selecting an option with the value "rigatoni"
//             fireEvent.change(select, { target: { value: 'Sin estudios o estudios primarios sin finalizar' } })
//             // Check if the selected option in the dropdown is "rigatoni"
//             expect(select.value).toBe('Sin estudios o estudios primarios sin finalizar')
//             // Simulate selecting an option with the value "dave"
//             fireEvent.change(select, { target: { value: 'Estudios primarios' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Estudios primarios')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Estudios secundarios' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Estudios secundarios')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Formación profesional' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Formación profesional')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Estudios universitarios' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Estudios universitarios')
//             fireEvent.change(select, { target: { value: 'Otro' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Otro')
//         }
//     });
// });

// describe('Expect an input that indica cúal es la titulación académica más alta que has obtenido', () => {
//     test('The input field and its props of indica cúal es la titulación académica más alta que has obtenido', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector(
//             '#estudio_mas_alto'
//         ) as HTMLInputElement | null;

//         // Check if the input element exists in the form component
//         expect(input).toBeTruthy();

//         if (input) {
//             // Set the input value
//             fireEvent.change(input, {
//                 target: {
//                     value: 'titulacion', // Set the value directly using the value property
//                 },
//             });

//             // Check if the input value has been set correctly
//             expect(input.value).toBe('titulacion');

//             // Check other props
//             expect(input.type).toBe('textarea');
//             expect(input.name).toBe('estudio_mas_alto');
//         }
//     });
// });

// describe('Expect an input that is que dedicación semanal tendrías para el proceso de formación', () => {
//     test('The input field and its props of que dedicación semanal tendrías para el proceso de formación', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector(
//             '#dedicacion_semanal'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(input).toBeTruthy()

//         // está vacio?
//         expect(input?.textContent).toBe('')

//         if (input) {
//             // prueba el input text
//             input.textContent = '15'
//             expect(input.textContent).toBe('15')

//             // prueba el type prop
//             expect(input.type).toBe('number')

//             // prueba el name prop
//             expect(input.name).toBe('dedicacion_semanal')

//             // prueba el value prop
//             fireEvent.change(input, {
//                 target: {
//                     value: '15'
//                 }
//             })
//             expect(input.value).toBe('15')

//         }
//     });

//     describe('Se espera un select donde indicamos en que situación profestional te encuentras', () => {
//         test('The select field and its props of situación profesional', () => {
//             render(
//                 <QueryClientProvider client={queryClient}>
//                     <Form />
//                 </QueryClientProvider>
//             );
//             const select = document.querySelector(
//                 '#situacion_profesional'
//             ) as HTMLInputElement | null;

//             // el input existe en el componente de formulario?
//             expect(select).toBeTruthy()

//             // está vacio?
//             expect(select?.value).toBe('')

//             if (select) {
//                 // Simulate selecting an option with the value "rigatoni"
//                 fireEvent.change(select, { target: { value: 'Desempleada/o sin ingresos' } })
//                 // Check if the selected option in the dropdown is "rigatoni"
//                 expect(select.value).toBe('Desempleada/o sin ingresos')
//                 // Simulate selecting an option with the value "dave"
//                 fireEvent.change(select, { target: { value: 'Desempleada/o con subsidio por desempleo' } })
//                 // Check if the selected option in the dropdown is "dave"
//                 expect(select.value).toBe('Desempleada/o con subsidio por desempleo')
//                 // Similarly, you can simulate selecting options with other values
//                 fireEvent.change(select, { target: { value: 'Empleada/o a tiempo completo' } })
//                 // Check if the selected option in the dropdown is "dave"
//                 expect(select.value).toBe('Empleada/o a tiempo completo')
//                 // Similarly, you can simulate selecting options with other values
//                 fireEvent.change(select, { target: { value: 'Empleada/o a tiempo parcial' } })
//                 // Check if the selected option in the dropdown is "dave"
//                 expect(select.value).toBe('Empleada/o a tiempo parcial')
//                 // Similarly, you can simulate selecting options with other values
//                 fireEvent.change(select, { target: { value: 'Autónoma/o' } })
//                 // Check if the selected option in the dropdown is "dave"
//                 expect(select.value).toBe('Autónoma/o')
//                 fireEvent.change(select, { target: { value: 'Estudiante' } })
//                 // Check if the selected option in the dropdown is "dave"
//                 expect(select.value).toBe('Estudiante')
//                 fireEvent.change(select, { target: { value: 'Otro' } })
//                 // Check if the selected option in the dropdown is "dave"
//                 expect(select.value).toBe('Otro')

//             }
//         });
//     });

// });


// describe('Expect an select that is indicanos cual es el acceso a internet', () => {
//     test('The select field and its props of conexion', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const select = document.querySelector(
//             '#acceso_internet_dispositivos'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(select).toBeTruthy()

//         // está vacio?
//         expect(select?.value).toBe('')

//         if (select) {
//             // Simulate selecting an option with the value "rigatoni"
//             fireEvent.change(select, { target: { value: 'Sin acceso (no tengo conexión a internet ni dispositivo)' } })
//             // Check if the selected option in the dropdown is "rigatoni"
//             expect(select.value).toBe('Sin acceso (no tengo conexión a internet ni dispositivo)')
//             // Simulate selecting an option with the value "dave"
//             fireEvent.change(select, { target: { value: 'Acceso muy limitado (tengo dispositivo pero no tengo conexión a internet)' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Acceso muy limitado (tengo dispositivo pero no tengo conexión a internet)')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Acceso limitado (tengo dispositivo y conexión a internet limitada)' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Acceso limitado (tengo dispositivo y conexión a internet limitada)')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Acceso medio (tengo dispositivo y conexión a internet, a pesar de no ser de buena calidad)' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Acceso medio (tengo dispositivo y conexión a internet, a pesar de no ser de buena calidad)')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Buen acceso (tengo buena conexión a internet y dispositivo)' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Buen acceso (tengo buena conexión a internet y dispositivo)')

//         }
//     });
// });

// describe('Expect an select that is Escoge la opcion que mejor se ajuste a tus intereses actuales', () => {
//     test('The select field and its props of intereses       ', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const select = document.querySelector(
//             '#intereses_actuales'
//         ) as HTMLInputElement | null;
//         // el input existe en el componente de formulario?
//         expect(select).toBeTruthy()
//         // está vacio?
//         expect(select?.value).toBe('')
//         if (select) {
//             // Simulate selecting an option with the value "rigatoni"
//             fireEvent.change(select, { target: { value: 'Estoy interesada/o en formarme en competencias tecnológicas' } })
//             // Check if the selected option in the dropdown is "rigatoni"
//             expect(select.value).toBe('Estoy interesada/o en formarme en competencias tecnológicas')
//             // Simulate selecting an option with the value "dave"
//             fireEvent.change(select, { target: { value: 'Estoy interesada/o en obtener un empleo en el sector tecnológico' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Estoy interesada/o en obtener un empleo en el sector tecnológico')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Necesito formarme para conseguir un empleo estable' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Necesito formarme para conseguir un empleo estable')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Quiero cambiar de sector profesional' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Quiero cambiar de sector profesional')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Otra' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Otra')
//         }
//     });
// });

// describe('Expect an input that explicanos brevemente las razones por las que te gustaria unirte a esta formación', () => {
//     test('The input field and its props of explicanos brevemente las razones por las que te gustaria unirte a esta formación', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector(
//             '#razones_para_unir'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(input).toBeTruthy()

//         // está vacio?
//         expect(input?.textContent).toBe('')

//         if (input) {
//             // prueba el input text
//             input.textContent = 'razones'
//             expect(input.textContent).toBe('razones')

//             // prueba el type prop
//             expect(input.type).toBe('textarea')

//             // prueba el name prop
//             expect(input.name).toBe('razones_para_unir')

//             // prueba el value prop
//             fireEvent.change(input, {
//                 target: {
//                     value: 'razones'
//                 }
//             })
//             expect(input.value).toBe('razones')

//         }
//     });

// });

// describe('Expect an select that is ¿Como has encontrado este programa?', () => {
//     test('The select field and its props of encontrado', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const select = document.querySelector(
//             '#encontrar_programa'
//         ) as HTMLInputElement | null;
//         // el input existe en el componente de formulario?
//         expect(select).toBeTruthy()
//         // está vacio?
//         expect(select?.value).toBe('')
//         if (select) {
//             // Simulate selecting an option with the value "rigatoni"
//             fireEvent.change(select, { target: { value: 'Redes sociales' } })
//             // Check if the selected option in the dropdown is "rigatoni"
//             expect(select.value).toBe('Redes sociales')
//             // Simulate selecting an option with the value "dave"
//             fireEvent.change(select, { target: { value: 'Somos F5' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Somos F5')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Factoría F5' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Factoría F5')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Fundación Don Bosco o sus redes sociales' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Fundación Don Bosco o sus redes sociales')
//             // Similarly, you can simulate selecting options with other values
//             fireEvent.change(select, { target: { value: 'Buscadores de internet (Google)' } })
//             // Check if the selected option in the dropdown is "dave"
//             expect(select.value).toBe('Buscadores de internet (Google)')
//         }
//     });
// });

// describe('Expect an input that quieres añadir alguna información que consideres relevante', () => {
//     test('The input field and its props quieres of añadir alguna información que consideres relevante', () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//                 <Form />
//             </QueryClientProvider>
//         );
//         const input = document.querySelector(
//             '#mas_informacion'
//         ) as HTMLInputElement | null;

//         // el input existe en el componente de formulario?
//         expect(input).toBeTruthy()

//         // está vacio?
//         expect(input?.textContent).toBe('')

//         if (input) {
//             // prueba el input text
//             input.textContent = 'informacion'
//             expect(input.textContent).toBe('informacion')

//             // prueba el type prop
//             expect(input.type).toBe('textarea')

//             // prueba el name prop
//             expect(input.name).toBe('mas_informacion')

//             // prueba el value prop
//             fireEvent.change(input, {
//                 target: {
//                     value: 'informacion'
//                 }
//             })
//             expect(input.value).toBe('informacion')

//         }
//     });

// });

// // describe('Se espera un input de ¿Cual es tu pais de nacimiento?', () => {
// //     test('Un campo de input y un props de los paises', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = 'Francia'
// //             expect(input.textContent).toBe('Francia')

// //             // prueba el type prop
// //             expect(input.type).toBe('country')

// //             // prueba el name prop
// //             expect(input.name).toBe('country')

// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: 'francia'
// //                 }
// //             })
// //             expect(input.value).toBe('francia')

// //         }
// //     });

// // });

// // describe('Expect an input that is Telefono de contacto', () => {
// //     test('The input field and its props of Telefono de contacto', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = 'carlos@mail.com'
// //             expect(input.textContent).toBe('carlos@mail.com')

// //             // prueba el type prop
// //             expect(input.type).toBe('email')

// //             // prueba el name prop
// //             expect(input.name).toBe('email')

// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: 'carlos@mail.com'
// //                 }
// //             })
// //             expect(input.value).toBe('carlos@mail.com')

// //         }
// //     });

// // });

// // describe('Expect an input that is si tienes DNI, por favor escribe tu numero de DNI aqui:', () => {
// //     test('The input field and its props of DNI', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = '49203529K'
// //             expect(input.textContent).toBe('49203529K')

// //             // prueba el type prop
// //             expect(input.type).toBe('DNI')

// //             // prueba el name prop
// //             expect(input.name).toBe('DNI')

// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: '49203529K'
// //                 }
// //             })
// //             expect(input.value).toBe('49203529K')

// //         }
// //     });

// // });

// // describe('Expect an input that is si tienes DNI, por favor escribe tu numero de DNI aqui:', () => {
// //     test('The input field and its props of DNI', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = '49203529K'
// //             expect(input.textContent).toBe('49203529K')

// //             // prueba el type prop
// //             expect(input.type).toBe('DNI')

// //             // prueba el name prop
// //             expect(input.name).toBe('DNI')

// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: '49203529K'
// //                 }
// //             })
// //             expect(input.value).toBe('49203529K')

// //         }
// //     });

// // });

// // describe('Expect an input that is si tienes NIE, por favor escribe tu numero de NIE aqui:', () => {
// //     test('The input field and its props of NIE', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = 'X1234567P'
// //             expect(input.textContent).toBe('X1234567P')

// //             // prueba el type prop
// //             expect(input.type).toBe('NIE')

// //             // prueba el name prop
// //             expect(input.name).toBe('NIE')

// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: 'X1234567P'
// //                 }
// //             })
// //             expect(input.value).toBe('X1234567P')

// //         }
// //     });

// // });

// // describe('Expect an input that is si tienes otro tipo de documento de identidad, por favor indicanos que tipo de documento de identidad', () => {
// //     test('The input field and its props of tipo de documento de identidad', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = 'Visa de trabajo'
// //             expect(input.textContent).toBe('Visa de trabajo')

// //             // prueba el type prop
// //             expect(input.type).toBe('VISA')

// //             // prueba el name prop
// //             expect(input.name).toBe('VISA')

// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: 'Visa de trabajo'
// //                 }
// //             })
// //             expect(input.value).toBe('Visa de trabajo')

// //         }
// //     });

// // });

// // describe('Expect an input that is Cual es tu direccion de residencia', () => {
// //     test('The input field and its props of residencia', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = 'C/Montblanc n-1 3-2'
// //             expect(input.textContent).toBe('C/Montblanc n-1 3-2')

// //             // prueba el type prop
// //             expect(input.type).toBe('direccion')

// //             // prueba el name prop
// //             expect(input.name).toBe('direccion')

// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: 'C/Montblanc n-1 3-2'
// //                 }
// //             })
// //             expect(input.value).toBe('C/Montblanc n-1 3-2')

// //         }
// //     });

// // });

// // describe('Expect an input that is en que ciudad resides', () => {
// //     test('The input field and its props of residencia', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = 'Sant Cugat'
// //             expect(input.textContent).toBe('Sant Cugat')

// //             // prueba el type prop
// //             expect(input.type).toBe('city')

// //             // prueba el name prop
// //             expect(input.name).toBe('city')

// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: 'Sant cugat'
// //                 }
// //             })
// //             expect(input.value).toBe('Sant cugat')

// //         }
// //     });

// // });

// // describe('Expect an input that is en que provincia resides', () => {
// //     test('The input field and its props of provincia', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = 'Barcelona'
// //             expect(input.textContent).toBe('Barcelona')

// //             // prueba el type prop
// //             expect(input.type).toBe('provincia')

// //             // prueba el name prop
// //             expect(input.name).toBe('provincia')

// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: 'Barcelona'
// //                 }
// //             })
// //             expect(input.value).toBe('Barcelona')

// //         }
// //     });

// // });

// // describe('Expect an input that is codigo postal', () => {
// //     test('The input field and its props of codigo postal', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = '08172'
// //             expect(input.textContent).toBe('08172')

// //             // prueba el type prop
// //             expect(input.type).toBe('cp')

// //             // prueba el name prop
// //             expect(input.name).toBe('cp')

// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: '08172'
// //                 }
// //             })
// //             expect(input.value).toBe('08172')

// //         }
// //     });

// // });


// // describe('Expect an input that is que dedicacion semanal tendrias para el proceso de formacion', () => {
// //     test('The input field and its props dedicacion semanal', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = 'completa'
// //             expect(input.textContent).toBe('completa')

// //             // prueba el type prop
// //             expect(input.type).toBe('dedicacion')

// //             // prueba el name prop
// //             expect(input.name).toBe('dedicacion')

// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: 'completa'
// //                 }
// //             })
// //             expect(input.value).toBe('completa')

// //         }
// //     });

// // });

// // describe('Expect an input that is explicanos brevemente las razones por las que te gustaria unirte a esta formacion', () => {
// //     test('The input field and its props of porque te unes', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = 'porque estoy en el paro'
// //             expect(input.textContent).toBe('porque estoy en el paro')


// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: 'porque estoy en el paro'
// //                 }
// //             })
// //             expect(input.value).toBe('porque estoy en el paro')

// //         }
// //     });

// // });

// // describe('Expect an input that is quieres añadir alguna informacion que sea relevante', () => {
// //     test('The input field and its props of informacion relevante', () => {
// //         render(<Form />)
// //         const input = document.querySelector(
// //             'input'
// //         ) as HTMLInputElement | null;

// //         // el input existe en el componente de formulario?
// //         expect(input).toBeTruthy()

// //         // está vacio?
// //         expect(input?.textContent).toBe('')

// //         if (input) {
// //             // prueba el input text
// //             input.textContent = 'soy coder'
// //             expect(input.textContent).toBe('soy coder')


// //             // prueba el value prop
// //             fireEvent.change(input, {
// //                 target: {
// //                     value: 'soy coder'
// //                 }
// //             })
// //             expect(input.value).toBe('soy coder')

// //         }
// //     });
