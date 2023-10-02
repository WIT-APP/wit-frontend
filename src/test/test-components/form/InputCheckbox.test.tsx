import { InputCheckbox } from "@/components/ui/form/InputCheckbox";
import { render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";

describe('InputCheckbox', () => {
    test('renders correctly', () => {
      const options = ['Option1', 'Option2', 'Option3'];
      const expandText = 'Expand';
      const label = 'Label';
  
        render(<InputCheckbox options={options} expandText={expandText} label={label} selectedValues={[]} onChange={() => vi.fn()}  />);
  

      const labelElement = screen.getByText(label);
      expect(labelElement).toBeTruthy();
  
    });
  });