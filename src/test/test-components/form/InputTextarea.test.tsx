import InputTextarea from "@/components/ui/form/InputTextarea";
import { render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";

describe('InputTextarea Component', () => {
    const id = 'textareaId';
    const placeholder = 'Enter your text';
    const labelText = 'Label';
    const expandText = 'Expand text';
    const value = '';
    const onChange = vi.fn();
  
    it('renders textarea and label', () => {
      render(
        <InputTextarea
          id={id}
          placeholder={placeholder}
          value={value}
          expandText={expandText}
          onChange={onChange}
        >
          {labelText}
        </InputTextarea>
      );
  
      const labelElement = screen.getByText(labelText);
      expect(labelElement).toBeTruthy();
  
      const textareaElement = screen.getByPlaceholderText(placeholder);
      expect(textareaElement).toBeTruthy();
  
    });
  });