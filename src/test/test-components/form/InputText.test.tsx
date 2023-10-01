import { InputText } from "@/components/ui/form/InputText";
import { render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";

describe('InputText Component', () => {
    const id = 'inputId';
    const type = 'text';
    const placeholder = 'Enter your text';
    const labelText = 'Label';
    const expandText = 'Expand text';
    const value = '';
    const onInputChange = vi.fn();
  
    it('renders input and placeholder', () => {
      render(
        <InputText
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          expandText={expandText}
          onInputChange={onInputChange}
        >
          {labelText}
        </InputText>
      );
  
      const labelElement = screen.getByText(labelText);
      expect(labelElement).toBeTruthy();
  
      const inputElement = screen.getByPlaceholderText(placeholder);
      expect(inputElement).toBeTruthy();
  
     
    });
  });