import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { FormSection } from "@/components/FormSection";

const mockData = [
    {
        id: 1,
        text: 'Text Question 1',
        type: 'text',
        options: [],
        category: 'Category 1',
        placeholder: 'Placeholder 1',
        expandText: 'Expand Text 1',
        id_question: 'text1',
        obligatory: true,
      },
      {
        id: 2,
        text: 'Email Question 2',
        type: 'email',
        options: [],
        category: 'Category 2',
        placeholder: 'Email Placeholder',
        expandText: 'Expand Text 2',
        id_question: 'email1',
        obligatory: false,
      },
      {
        id: 3,
        text: 'Select Question',
        type: 'select',
        options: ['Option 1', 'Option 2'],
        category: 'Category 3',
        placeholder: 'Select Placeholder',
        expandText: 'Expand Text 3',
        id_question: 'select1',
        obligatory: true,
      },
      {
        id: 4,
        text: 'Checkbox Question',
        type: 'checkbox',
        options: ['Option 1', 'Option 2'],
        category: 'Category 4',
        placeholder: 'Checkbox Placeholder',
        expandText: 'Expand Text 4',
        id_question: 'checkbox1',
        obligatory: true,
      },
      {
        id: 5,
        text: 'Textarea Question',
        type: 'textarea',
        options: [],
        category: 'Category 5',
        placeholder: 'Textarea Placeholder',
        expandText: 'Expand Text 5',
        id_question: 'textarea1',
        obligatory: false,
      },
      {
        id: 6,
        text: 'DocumentoIdentidad Question',
        type: 'document',
        options: ['Option 1', 'Option 2'],
        category: 'Category 6',
        placeholder: 'Document Placeholder',
        expandText: 'Expand Text 6',
        id_question: 'document1',
        obligatory: true,
      },
      {
        id: 7,
        text: 'Phone Question',
        type: 'phone',
        options: [],
        category: 'Category 7',
        placeholder: 'Phone Placeholder',
        expandText: 'Expand Text 7',
        id_question: 'phone1',
        obligatory: true,
      },
      {
        id: 8,
        text: 'Radio Question',
        type: 'radio',
        options: ['Option A', 'Option B'],
        category: 'Category 8',
        placeholder: 'Radio Placeholder',
        expandText: 'Expand Text 8',
        id_question: 'radio1',
        obligatory: true,
      },
  ];
describe('Form Section should load correctly', () => {
    test('should load form component', () => {
        expect(<FormSection data={mockData} />).toStrictEqual(<FormSection data={mockData}/>);
    });
});

describe('Form Section should the relevant component on the page depending on the type of the question in the database', () => {
    it('should render InputText for question of type "text"', () => {
        const { container } = render(<FormSection data={mockData} />);
        expect(container.querySelector('input[type="text"]')).toBeTruthy();
      });
    
      it('should render InputEmail for question of type "email"', () => {
        const { container } = render(<FormSection data={mockData} />);
        expect(container.querySelector('input[type="email"]')).toBeTruthy();
      });
    
      it('should render InputSelect for question of type "select"', () => {
        const { container } = render(<FormSection data={mockData} />);
        expect(container.querySelector('select')).toBeTruthy();
      });
    
      it('should render InputCheckbox for question of type "checkbox"', () => {
        const { container } = render(<FormSection data={mockData} />);
        expect(container.querySelector('input[type="checkbox"]')).toBeTruthy();
      });
    
      it('should render InputTextarea for question of type "textarea"', () => {
        const { container } = render(<FormSection data={mockData} />);
        expect(container.querySelector('textarea')).toBeTruthy();
      });
    
      it('should render DocumentoIdentidad for question of type "document"', () => {
        const { container } = render(<FormSection data={mockData} />);
        expect(container.querySelector('[data-testid="documento-identidad"]')).toBeTruthy();
      });
    
      it('should render InputPhoneNumber for question of type "phone"', () => {
        const { container } = render(<FormSection data={mockData} />);
        expect(container.querySelector('input[type="phone"]')).toBeTruthy();
      });
    
      it('should render InputRadioBox for question of type "radio"', () => {
        const { container } = render(<FormSection data={[mockData[7]]} />);
        expect(container.querySelector('input[type="radio"]')).toBeTruthy();
      });
    


    }    )

