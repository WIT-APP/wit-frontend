import { render, screen, waitFor } from "@testing-library/react";
import { describe, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { UnsavedChangesConfirmationDialog } from "@/components/alerts/UnsavedChangesDialog";

describe('UnsavedChangesConfirmationDialog Component', () => {

    test('renders the UnsavedChangesConfirmationDialog and triggers onClose and onContinue on button clicks', async () => {
        const onCloseMock = vi.fn();
        const onContinueMock = vi.fn();
        const isOpen = true;
  
        render(
            <UnsavedChangesConfirmationDialog
                isOpen={isOpen}
                onClose={onCloseMock}
                onContinue={onContinueMock}
            />
        );
  
        const title = screen.getByText('Cambios Sin Guardar');
        const description = screen.getByText('Tienes cambios sin guardar. ¿Estás seguro/a de que quieres salir?');
        const cancelButton = screen.getByText('Cancelar');
        const continueButton = screen.getByText('Salir de la Pagina');
  
        expect(title).toBeTruthy();
        expect(description).toBeTruthy();
  
        userEvent.click(cancelButton);
        await waitFor(() => {

            expect(onCloseMock).toHaveBeenCalled();
        });
        userEvent.click(continueButton);
        await waitFor(() => {
            expect(onContinueMock).toHaveBeenCalled();
        });
    });
});