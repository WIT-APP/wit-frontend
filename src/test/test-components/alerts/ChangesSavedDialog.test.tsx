import { render, screen, waitFor } from "@testing-library/react";
import { describe, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { ChangesSavedDialog } from "@/components/alerts/ChangesSavedDialog";

describe('ChangesSavedDialog Component', () => {

    test('renders the ChangesSavedDialog and triggers onClose on button click', async () => {
        const onCloseMock = vi.fn();
        const isOpen = true;
  
        render(<ChangesSavedDialog isOpen={isOpen} onClose={onCloseMock} />);
  
        const title = screen.getByText('Cambios Guardados Exitosamente');
        const description = screen.getByText('Los cambios se han guardado exitosamente.');
        const closeButton = screen.getByText('Cerrar');
  
        expect(title).toBeTruthy();
        expect(description).toBeTruthy();
        expect(closeButton).toBeTruthy();
        expect(onCloseMock).not.toHaveBeenCalled();
        userEvent.click(closeButton);
  
        await waitFor(() => {
            expect(onCloseMock).toHaveBeenCalled();
        });
    });
});