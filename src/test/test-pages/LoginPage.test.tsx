import { describe, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import LoginPage from "@/pages/LoginPage";
import { AuthProvider } from "@/hooks/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { useLoginUser } from "@/services/LoginUser";

const queryClient = new QueryClient();

vi.mock("@/services/LoginUser", () => ({
    useLoginUser: vi.fn()
  }));
  

describe("LoginPage", () => {
  it("renders the login page", () => {
    const { getByText } = render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <LoginPage />
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    );
      expect(getByText("Enviar")).toBeTruthy();
      expect(getByText("Correo Electronico")).toBeTruthy();
      expect(getByText("Contraseña")).toBeTruthy();
  });

  it("submits the form when filled", async () => {
 

    const { getByText, getByLabelText } = render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <LoginPage />
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    );

    const emailInput = getByLabelText("Correo Electronico") as HTMLInputElement;
    const passwordInput = getByLabelText("Contraseña") as HTMLInputElement;
    const submitButton = getByText("Enviar");
    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(useLoginUser).toHaveBeenCalled()
    });
  });
});
