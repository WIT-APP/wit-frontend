import { describe, expect, test } from "vitest";
import { render, fireEvent, } from "@testing-library/react";


import Form from "../components/form";


describe('Form should load correctly', () => {
    test('should load form component', () => {
        expect(<Form></Form>).toStrictEqual(<Form></Form>);
    });
});

describe('Expect an input that is Nombre y Apellidos', () => {
    test('The input field and its props of name', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'Carlos Saiz'
            expect(input.textContent).toBe('Carlos Saiz')

            // prueba el type prop
            expect(input.type).toBe('Name')

            // prueba el name prop
            expect(input.name).toBe('Name')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'Carlos Saiz'
                }
            })
            expect(input.value).toBe('Carlos Saiz')

        }
    });

});

describe('Expect an input that is Correo electronico', () => {
    test('The input field and its props of Correo electronico', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'carlos@mail.com'
            expect(input.textContent).toBe('carlos@mail.com')

            // prueba el type prop
            expect(input.type).toBe('email')

            // prueba el name prop
            expect(input.name).toBe('email')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'carlos@mail.com'
                }
            })
            expect(input.value).toBe('carlos@mail.com')

        }
    });

});

describe('Expect an input that is Telefono de contacto', () => {
    test('The input field and its props of Telefono de contacto', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'carlos@mail.com'
            expect(input.textContent).toBe('carlos@mail.com')

            // prueba el type prop
            expect(input.type).toBe('email')

            // prueba el name prop
            expect(input.name).toBe('email')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'carlos@mail.com'
                }
            })
            expect(input.value).toBe('carlos@mail.com')

        }
    });

});

describe('Expect an input that is ¿Cual es tu pais de nacimiento?', () => {
    test('The input field and its props of pais de nacimiento', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'Francia'
            expect(input.textContent).toBe('Francia')

            // prueba el type prop
            expect(input.type).toBe('country')

            // prueba el name prop
            expect(input.name).toBe('country')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'francia'
                }
            })
            expect(input.value).toBe('francia')

        }
    });

});

describe('Expect an input that is Telefono de contacto', () => {
    test('The input field and its props of Telefono de contacto', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'carlos@mail.com'
            expect(input.textContent).toBe('carlos@mail.com')

            // prueba el type prop
            expect(input.type).toBe('email')

            // prueba el name prop
            expect(input.name).toBe('email')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'carlos@mail.com'
                }
            })
            expect(input.value).toBe('carlos@mail.com')

        }
    });

});

describe('Expect an input that is si tienes DNI, por favor escribe tu numero de DNI aqui:', () => {
    test('The input field and its props of DNI', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = '49203529K'
            expect(input.textContent).toBe('49203529K')

            // prueba el type prop
            expect(input.type).toBe('DNI')

            // prueba el name prop
            expect(input.name).toBe('DNI')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: '49203529K'
                }
            })
            expect(input.value).toBe('49203529K')

        }
    });

});

describe('Expect an input that is si tienes DNI, por favor escribe tu numero de DNI aqui:', () => {
    test('The input field and its props of DNI', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = '49203529K'
            expect(input.textContent).toBe('49203529K')

            // prueba el type prop
            expect(input.type).toBe('DNI')

            // prueba el name prop
            expect(input.name).toBe('DNI')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: '49203529K'
                }
            })
            expect(input.value).toBe('49203529K')

        }
    });

});

describe('Expect an input that is si tienes NIE, por favor escribe tu numero de NIE aqui:', () => {
    test('The input field and its props of NIE', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'X1234567P'
            expect(input.textContent).toBe('X1234567P')

            // prueba el type prop
            expect(input.type).toBe('NIE')

            // prueba el name prop
            expect(input.name).toBe('NIE')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'X1234567P'
                }
            })
            expect(input.value).toBe('X1234567P')

        }
    });

});

describe('Expect an input that is si tienes otro tipo de documento de identidad, por favor indicanos que tipo de documento de identidad', () => {
    test('The input field and its props of tipo de documento de identidad', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'Visa de trabajo'
            expect(input.textContent).toBe('Visa de trabajo')

            // prueba el type prop
            expect(input.type).toBe('VISA')

            // prueba el name prop
            expect(input.name).toBe('VISA')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'Visa de trabajo'
                }
            })
            expect(input.value).toBe('Visa de trabajo')

        }
    });

});

describe('Expect an input that is Cual es tu direccion de residencia', () => {
    test('The input field and its props of residencia', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'C/Montblanc n-1 3-2'
            expect(input.textContent).toBe('C/Montblanc n-1 3-2')

            // prueba el type prop
            expect(input.type).toBe('direccion')

            // prueba el name prop
            expect(input.name).toBe('direccion')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'C/Montblanc n-1 3-2'
                }
            })
            expect(input.value).toBe('C/Montblanc n-1 3-2')

        }
    });

});

describe('Expect an input that is en que ciudad resides', () => {
    test('The input field and its props of residencia', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'Sant Cugat'
            expect(input.textContent).toBe('Sant Cugat')

            // prueba el type prop
            expect(input.type).toBe('city')

            // prueba el name prop
            expect(input.name).toBe('city')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'Sant cugat'
                }
            })
            expect(input.value).toBe('Sant cugat')

        }
    });

});

describe('Expect an input that is en que provincia resides', () => {
    test('The input field and its props of provincia', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'Barcelona'
            expect(input.textContent).toBe('Barcelona')

            // prueba el type prop
            expect(input.type).toBe('provincia')

            // prueba el name prop
            expect(input.name).toBe('provincia')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'Barcelona'
                }
            })
            expect(input.value).toBe('Barcelona')

        }
    });

});

describe('Expect an input that is codigo postal', () => {
    test('The input field and its props of codigo postal', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = '08172'
            expect(input.textContent).toBe('08172')

            // prueba el type prop
            expect(input.type).toBe('cp')

            // prueba el name prop
            expect(input.name).toBe('cp')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: '08172'
                }
            })
            expect(input.value).toBe('08172')

        }
    });

});

describe('Expect an input that is indicanos cual es tu titulacion academica mas alta que has obtenido', () => {
    test('The input field and its props of titulacion academica', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'Master'
            expect(input.textContent).toBe('Master')

            // prueba el type prop
            expect(input.type).toBe('titulo')

            // prueba el name prop
            expect(input.name).toBe('titulo')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'master'
                }
            })
            expect(input.value).toBe('master')

        }
    });

});

describe('Expect an input that is que dedicacion semanal tendrias para el proceso de formacion', () => {
    test('The input field and its props dedicacion semanal', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'completa'
            expect(input.textContent).toBe('completa')

            // prueba el type prop
            expect(input.type).toBe('dedicacion')

            // prueba el name prop
            expect(input.name).toBe('dedicacion')

            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'completa'
                }
            })
            expect(input.value).toBe('completa')

        }
    });

});

describe('Expect an input that is explicanos brevemente las razones por las que te gustaria unirte a esta formacion', () => {
    test('The input field and its props of porque te unes', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'porque estoy en el paro'
            expect(input.textContent).toBe('porque estoy en el paro')


            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'porque estoy en el paro'
                }
            })
            expect(input.value).toBe('porque estoy en el paro')

        }
    });

});

describe('Expect an input that is quieres añadir alguna informacion que sea relevante', () => {
    test('The input field and its props of informacion relevante', () => {
        render(<Form />)
        const input = document.querySelector(
            'input'
        ) as HTMLInputElement | null;

        // el input existe en el componente de formulario?
        expect(input).toBeTruthy()

        // está vacio?
        expect(input?.textContent).toBe('')

        if (input) {
            // prueba el input text
            input.textContent = 'soy coder'
            expect(input.textContent).toBe('soy coder')


            // prueba el value prop
            fireEvent.change(input, {
                target: {
                    value: 'soy coder'
                }
            })
            expect(input.value).toBe('soy coder')

        }
    });

});