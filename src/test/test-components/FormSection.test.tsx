/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, expect, test } from "vitest";
import { FormSection } from "@/components/FormSection";
import { Formik } from "formik";
import { render, screen } from "@testing-library/react";


const props = [
  {
    id: 1,
    text: "Text Question 1",
    type: "text",
    options: [],
    category: "Category 1",
    placeholder: "Placeholder 1",
    expandText: "Expand Text 1",
    id_question: "text1",
    obligatory: true,
  },
  {
    id: 2,
    text: "Date Question",
    type: "date",
    options: [],
    category: "Category 2",
    placeholder: "Date Placeholder",
    expandText: "Expand Text 2",
    id_question: "date1",
    obligatory: false,
  },
  {
    id: 3,
    text: "Select Question",
    type: "select",
    options: ["Option 1", "Option 2"],
    category: "Category 3",
    placeholder: "Select Placeholder",
    expandText: "Expand Text 3",
    id_question: "select1",
    obligatory: true,
  },
  {
    id: 4,
    text: "Checkbox Question",
    type: "checkbox",
    options: ["Option 1", "Option 2"],
    category: "Category 4",
    placeholder: "Checkbox Placeholder",
    expandText: "Expand Text 4",
    id_question: "checkbox1",
    obligatory: true,
  },
  {
    id: 5,
    text: "Textarea Question",
    type: "textarea",
    options: [],
    category: "Category 5",
    placeholder: "Textarea Placeholder",
    expandText: "Expand Text 5",
    id_question: "textarea1",
    obligatory: false,
  },
  {
    id: 6,
    text: "Toggle Question",
    type: "toggle",
    options: ["Option 1"],
    category: "Category 6",
    placeholder: "Toggle Placeholder",
    expandText: "Expand Text 6",
    id_question: "toggle1",
    obligatory: true,
  },
  {
    id: 7,
    text: "Phone Question",
    type: "phone",
    options: [],
    category: "Category 7",
    placeholder: "Phone Placeholder",
    expandText: "Expand Text 7",
    id_question: "phone1",
    obligatory: true,
  },
  {
    id: 8,
    text: "Radio Question",
    type: "radio",
    options: ["Option A", "Option B"],
    category: "Category 8",
    placeholder: "Radio Placeholder",
    expandText: "Expand Text 8",
    id_question: "radio1",
    obligatory: true,
  },
];

describe("Form Section should load correctly", () => {
  beforeEach(() => {
    render(
      <Formik
        onSubmit={function (): void | Promise<unknown> {
          throw new Error("Function not implemented.");
        }}
        initialValues={{ undefined }}
      >
        <FormSection
          isFetching={false}
          isPreviousData={false}
          question={props} currentPage={0} onPageChange={function (): void {
            throw new Error("Function not implemented.");
          } }        />
      </Formik>
    );
  });

  test("should render text input for text question", () => {
    const textQuestion = screen.getByPlaceholderText("Placeholder 1");
    expect(textQuestion).toBeTruthy();
  });
  
  test('should render textarea for textarea question', () => {
    const textareaQuestion = screen.getByPlaceholderText('Textarea Placeholder');
    expect(textareaQuestion).toBeTruthy();
  });

  test('should render date input for date question', () => {
    const dateQuestion = screen.getByPlaceholderText('Date Placeholder');
    expect(dateQuestion).toBeTruthy();
  });

  test('should render checkboxes for checkbox question', () => {
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);

  });
  test('should render phone input for phone question', () => {
    const phoneQuestion = screen.getByPlaceholderText('Phone Placeholder');
    expect(phoneQuestion).toBeTruthy();
  });
  test('should render radio buttons for radio question', () => {
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons.length).toBeGreaterThan(0);
  });

  test('should render toggle buttons for toggle question', () => {
    const toggleButtons = screen.getAllByRole('checkbox');
    expect(toggleButtons.length).toBeGreaterThan(0);
  });
  test('should render previous page button', () => {
    const previousPageButton = screen.getByText('Previous Page');
    expect(previousPageButton).toBeTruthy();
  });
  
  test('should render next page button', () => {
    const nextPageButton = screen.getByText('Next Page');
    expect(nextPageButton).toBeTruthy();
  });

  test('should render submit button', () => {
    const submitButton = screen.getByText('Enviar');
    expect(submitButton).toBeTruthy();
  });
});
