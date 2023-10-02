import { InputSelect } from '@/components/ui/form/InputSelect';
import { render, screen } from '@testing-library/react';
import { describe, vi } from "vitest";

describe('InputSelect Component', () => {
  const options = ['Option1', 'Option2', 'Option3'];
  const selectedValue = 'Option1';
  const label = 'Select an option';

  const onChange = vi.fn();

  it('renders options and label', () => {
    render(
      <InputSelect
        id="selectId"
        label={label}
        value={selectedValue}
        options={options}
        onChange={onChange}
      />
    );

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeTruthy();

    options.forEach((option) => {
      const optionElement = screen.getByText(option);
      expect(optionElement).toBeTruthy();
    });

   
  });
});