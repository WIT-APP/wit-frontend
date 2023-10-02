import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormPage } from "@/pages/FormPage";

const queryClient = new QueryClient();

describe("FormPage component", () => {
  test("should render Form2 component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FormPage />
      </QueryClientProvider>
    );

    expect(screen.getByTestId("form2-component")).toBeTruthy();
  });
});
