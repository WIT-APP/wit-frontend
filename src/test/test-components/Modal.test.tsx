import Modal from "@/components/modal/Modal";
import { act, render, screen, waitFor } from "@testing-library/react";
import { describe, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUpdateApplicant } from "@/services/UpdateApplicant";

global.window.open = vi.fn();

const queryClient = new QueryClient();


vi.mock("@/services/UpdateApplicant", () => ({
  useUpdateApplicant: vi.fn()
}));

describe('Modal Component', () => {
  const mockApplicant = {
    nombre: 'John',
    programa_cursar: 'Program',
    apellidos: 'Doe',
    telefono: '123456789',
  };

 
  test('renders and handles sending message', async () => {
    render(
      <QueryClientProvider client={queryClient}>

        <Modal id={""} estado={""} invitaciones={0} textButton="Open" {...mockApplicant} />
        </QueryClientProvider>

        );
      
    const openButton = screen.getByText('Open');
    userEvent.click(openButton);

    await waitFor(() => {
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeTruthy();
    });

    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeTruthy();

    await act(async () => {
      await userEvent.type(textarea, 'Test message');
    });

    const sendButton = screen.getByText('Enviar Mensaje');
    await userEvent.click(sendButton);

    expect(useUpdateApplicant).toHaveBeenCalled();

    expect(window.open).toHaveBeenCalledWith(
      "https://web.whatsapp.com/send?phone=34123456789&text=Hola%20John!%20Soy%20Daniela%2C%20de%20Somos%20F5.%20Te%20escribo%20para%20recordarte%20que%20ma%C3%B1ana%20nos%20vemos%20en%20la%20Sesi%C3%B3n%20de%20Selecci%C3%B3n%20para%20el%20BOOTCAMP%20DE%20PROGRAM%20%3A)%20La%20sesi%C3%B3n%20empieza%20a%20las%2015%3A30h%20(hora%20peninsular).%20Hablaremos%20del%20programa%20y%20haremos%20una%20entrevista%20personal.%20Por%20favor%2C%20conf%C3%ADrmame%20si%20estar%C3%A1s.%20La%20asistencia%20es%20obligatoria%20para%20entrar%20en%20el%20bootcamp.%20Aqu%C3%AD%20te%20dejo%20el%20enlace%20de%20Zoom%3A%20https%3A%2F%2Fus06web.zoom.us%2Fj%2F6368867811%20Un%20saludo%2C%20DaniTest%20message",
      '_blank'
    );
  });
});