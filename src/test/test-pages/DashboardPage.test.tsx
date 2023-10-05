import { AuthProvider } from "@/hooks/authContext";
import Dashboard from "@/pages/Dashboard";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Dashboard Page", () => {
  test("renders Dashboard component correctly", () => {
    const dashboard = render(
      <BrowserRouter>
        <AuthProvider>
          <Dashboard />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(dashboard).toBeTruthy();
  });
});
