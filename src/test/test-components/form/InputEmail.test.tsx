import InputEmail from "@/components/ui/form/InputEmail";
import { render } from "@testing-library/react";
import { describe } from "vitest";

describe('Email field in InputEmail component', () => {
    test('should render correctly', () => {
      const { getByText } = render(
        <InputEmail
          id="email"
          type="email"
          placeholder="Enter your email"
          expandText="Expand"
          children="Email"
          value=""
        />
      );
  
      const emailInput = getByText('Email');
      expect(emailInput).toBeTruthy();
    });
  
    test('should render the Confirm Email field correctly', () => {
      const { getAllByText } = render(
        <InputEmail
          id="confirm_email"
          type="email"
          placeholder="Enter your email"
          expandText="Expand"
          children="Confirma tu correo electronico"
          value=""
        />
      );
  
      const confirmEmailInput = getAllByText('Confirma tu correo electronico');
      expect(confirmEmailInput).toBeTruthy();
    });
  });