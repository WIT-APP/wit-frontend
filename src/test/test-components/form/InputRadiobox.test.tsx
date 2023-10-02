import { InputRadioBox } from '@/components/ui/form/InputRadioBox';
import { render, screen } from '@testing-library/react';
import { describe, vi } from "vitest";

describe('InputRadioBox Component', () => {
  const options = ['Option1', 'Option2', 'Option3'];
  const selectedValue = 'Option1';
  const expandText = 'Expand';
  const label = 'Select an option';

  const onChange = vi.fn();

  it('renders options and label', () => {
    render(
      <InputRadioBox
        options={options}
        selectedValue={selectedValue}
        expandText={expandText}
        label={label}
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