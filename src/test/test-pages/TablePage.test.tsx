/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import TablePage from "../../pages/TablePage";
import * as useFilterByEstadoModule from "../../services/GetByEstado";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const mockFormattedApplicants = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

describe("TablePage Component", () => {
  let mockUseFilterByEstado: any;
  let mockUseParams: any;

  beforeEach(() => {
    mockUseFilterByEstado = vi.spyOn(useFilterByEstadoModule, "default");

    mockUseFilterByEstado.mockReturnValue({
      isLoading: true,
      isError: false,
      applicant: null,
    });
    mockUseParams = vi.fn();
    mockUseParams.mockReturnValue({ Aplicante: "someEstado" });
    render(
      <QueryClientProvider client={queryClient}>
        <TablePage />
      </QueryClientProvider>
    );
  });

  afterEach(() => {
    mockUseFilterByEstado.mockRestore();
    mockUseParams.mockRestore();
  });

  test("renders loading state", async () => {
    mockUseFilterByEstado.mockReturnValue({
      isLoading: true,
      isError: false,
      formattedApplicants: null,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <TablePage />
      </QueryClientProvider>
    );

    expect(screen.getAllByText("Loading...")).toBeTruthy();
  });

  test("renders error state", async () => {
    mockUseFilterByEstado.mockReturnValue({
      isLoading: false,
      isError: true,
      formattedApplicants: null,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <TablePage />
      </QueryClientProvider>
    );
    expect(screen.getByText(/error fetching data/i)).toBeTruthy();
  });

  test("renders success state with data table columns", async () => {
    mockUseFilterByEstado.mockReturnValue({
      isLoading: false,
      isError: false,
      formattedApplicants: mockFormattedApplicants,
    });
    render(
      <QueryClientProvider client={queryClient}>
        <TablePage />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Nombre")).toBeTruthy();
      expect(screen.getByText("Apellidos")).toBeTruthy();
    });
  });
});
