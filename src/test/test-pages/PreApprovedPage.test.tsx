/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import PreApproved from "@/pages/PreApprovedPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as usePreApprovedApplicantsModule from "../../services/PreApprovedAplicants";

const queryClient = new QueryClient();
describe("PreApproved Page", () => {
    let mockUsePreApprovedApplicants: any;
  
    beforeEach(() => {
        mockUsePreApprovedApplicants = vi.spyOn(
            usePreApprovedApplicantsModule,
            "usePreApprovedApplicants"
        );
  
        mockUsePreApprovedApplicants.mockReturnValue({
            isLoading: true,
            isError: false,
            applicant: null,
        });
    });
  
    afterEach(() => {
        mockUsePreApprovedApplicants.mockRestore();
    });
  
    test("renders loading state", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <PreApproved />
            </QueryClientProvider>
        );
  
        expect(screen.getByText("Loading...")).toBeTruthy();
    });
  
    test("renders error state", () => {
        mockUsePreApprovedApplicants.mockReturnValue({
            isLoading: false,
            isError: true,
            applicant: null,
        });
  
        render(
            <QueryClientProvider client={queryClient}>
                <PreApproved />
            </QueryClientProvider>
        );
  
        expect(screen.getByText(/error fetching data/i)).toBeTruthy();
    });
  
    test("renders success state with data table columns", async () => {
        const mockApplicants = [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Smith" },
        ];
      
        mockUsePreApprovedApplicants.mockReturnValue({
            isLoading: false,
            isError: false,
            applicant: mockApplicants,
        });
      
        render(
            <QueryClientProvider client={queryClient}>
                <PreApproved />
            </QueryClientProvider>
        );
      
        await waitFor(() => {
            expect(screen.getByText("Nombre")).toBeTruthy();
            expect(screen.getByText("Apellidos")).toBeTruthy();
            expect(screen.getByText("seleccionados")).toBeTruthy();
            expect(screen.getByText("todos")).toBeTruthy();
            expect(screen.getAllByText("Email")).toBeTruthy();
            expect(screen.getByText("Telefono")).toBeTruthy();
            expect(screen.getByText("Invitaciones")).toBeTruthy();
            expect(screen.getByText("Programa a Cursar")).toBeTruthy();
            expect(screen.getByText("Estado")).toBeTruthy();
            expect(screen.getByText("Fecha de aplicación")).toBeTruthy();
            expect(screen.getByText("Observaciones")).toBeTruthy();
        });
    });
});