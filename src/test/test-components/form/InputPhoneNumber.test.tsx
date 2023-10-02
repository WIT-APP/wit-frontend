import { InputPhoneNumber } from '@/components/ui/form/InputPhoneNumber';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('InputPhoneNumber Component', () => {
  const defaultProps = {
    id: 'phone',
    type: 'text',
    placeholder: 'Enter phone number',
    children: 'Telefono',
    expandText: 'Expand',
    onChange: vi.fn(),
  };

  test('renders correctly', () => {
    render(<InputPhoneNumber {...defaultProps} />);

    const phoneInput = screen.getByText('Telefono');
    expect(phoneInput).toBeTruthy();
  });

});