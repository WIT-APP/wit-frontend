import { render, fireEvent, waitFor } from '@testing-library/react';
import ModalConfirmation from '@/components/modal/ModalConfirmation';
import userEvent from '@testing-library/user-event';

describe('ModalConfirmation', () => {
  const onConfirmMock = vi.fn();
  const onCancelMock = vi.fn();

  const props = {
    onConfirm: onConfirmMock,
    onCancel: onCancelMock,
    applicantName: 'John Doe',
    nuevoEstado: 'Pending',
  };

  it('renders with correct content', () => {
    const { getByText } = render(<ModalConfirmation {...props} />);
    expect(getByText(/¿Está seguro de que desea cambiar el estado de /i)).toBeTruthy();
 
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Pending')).toBeTruthy();
  });

  it('calls onConfirm when Confirm button is clicked', async () => {
    const { getByText } = render(<ModalConfirmation {...props} />);

    const confirmButton = getByText('Confirmar');
    userEvent.click(confirmButton);

      await waitFor(() =>
          expect(onConfirmMock).toHaveBeenCalledTimes(1)
      );
  });

  it('calls onCancel when Cancel button is clicked', () => {
    const { getByText } = render(<ModalConfirmation {...props} />);

    const cancelButton = getByText('Cancelar');
    fireEvent.click(cancelButton);

    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });
});