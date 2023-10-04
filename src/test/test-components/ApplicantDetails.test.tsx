import { act, render, screen, waitFor } from "@testing-library/react";
import { describe } from "vitest";
import userEvent from "@testing-library/user-event";
import { ApplicantDetails } from "@/components/ApplicantDetails";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { useGetByIdApplicant } from "@/services/GetByIdApplicant";
import { useUpdateApplicant } from "@/services/UpdateApplicant";
import { Applicant } from "@/interfaces/applicant.interface";
import { ChangesSavedDialog } from "@/components/alerts/ChangesSavedDialog";
import { UnsavedChangesConfirmationDialog } from "@/components/alerts/UnsavedChangesDialog";

vi.mock("@/components/alerts/ChangesSavedDialog", () => ({
  ChangesSavedDialog: vi.fn(() => null),
}));
vi.mock("@/components/alerts/UnsavedChangesDialog", () => ({
  UnsavedChangesConfirmationDialog: vi.fn(() => null),
}));


const queryClient = new QueryClient();

vi.mock("@/services/GetByIdApplicant", () => ({
  useGetByIdApplicant: vi.fn().mockReturnValue({
    oneApplicant: {
      nombre: "Mocked Nombre",
      apellidos: "Mocked Apellidos",
    } as Applicant,
    isLoading: false,
    isError: false,
  }),
}));


vi.mock("@/services/UpdateApplicant", () => ({
  useUpdateApplicant: vi.fn()
}));



describe("ApplicantDetails Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ApplicantDetails />
        </QueryClientProvider>
      </BrowserRouter>
    );
  });

  test("renders the ApplicantDetails component - Header", async () => {
    await waitFor(() => {
      const title = screen.getByText("Información del Aspirante");
      const cancelButton = screen.getByRole("button", { name: "Volver atrás" });
      const saveButton = screen.getByRole("button", { name: "Guardar" });
    /*   const interviewButton = screen.getByRole("button", {
        name: "Ir a la entrevista",
      });   */
      expect(title).toBeTruthy();
      expect(cancelButton).toBeTruthy();
      expect(saveButton).toBeTruthy();
/*       expect(interviewButton).toBeTruthy();
 */    });
 
  });

  test("renders the ApplicantDetails component - Categories", () => {
    const personal = screen.getByText("Personal");
    const sociodemografica = screen.getByText("Sociodemografica");
    const academica = screen.getByText("Academica");
    const formacion = screen.getByText("Formacion");
    const notas = screen.getByText("Notas");

    expect(personal).toBeTruthy();
    expect(sociodemografica).toBeTruthy();
    expect(academica).toBeTruthy();
    expect(formacion).toBeTruthy();
    expect(notas).toBeTruthy();
  });

  test("renders input fields with mocked data", () => {
    const nombreInput = screen.getByText("Nombre");
    const apellidosInput = screen.getByText("Apellidos");

    expect(nombreInput).toBeTruthy();
    expect(apellidosInput).toBeTruthy();

    const { oneApplicant } = useGetByIdApplicant();
    expect(oneApplicant?.nombre).toBe("Mocked Nombre");
    expect(oneApplicant?.apellidos).toBe("Mocked Apellidos");
  });

  test("captures input change data", async () => {
    const nombreLabel = screen.getByText("Nombre");
    const nombreInput = nombreLabel.parentElement?.querySelector("input");

    if (!nombreInput) {
      throw new Error("Input not found");
    }
    const newSampleNombre = "New Sample Nombre";
    expect(nombreInput.value).toBe("Mocked Nombre");
    userEvent.clear(nombreInput);
    expect(nombreInput.value).toBe("");
    await userEvent.type(nombreInput, newSampleNombre);
    expect(nombreInput.value).toBe(newSampleNombre);
  });
  test("it calls mutateAsync when clicking Save", async () => {
      const saveButton = screen.getByRole("button", { name: "Guardar" });
    
      expect(saveButton).toBeTruthy();
    
      userEvent.click(saveButton);
      await waitFor(() => {
        expect(useUpdateApplicant).toHaveBeenCalled();
      });
    });

    
  test("calls success alert upon clicking on save", async () => {
    const saveButton = screen.getByText("Guardar");
    await userEvent.click(saveButton);

    expect(ChangesSavedDialog).toHaveBeenCalled();
  });

  test("calls cancellation or confirmation dialog upon clicking on volver atras if there are unsaved changes", async () => {
    const cancelButton = screen.getByText("Volver atrás");

    const setUnsavedChanges = vi.fn();
    act(() => {
      setUnsavedChanges(true);
    });

    userEvent.click(cancelButton);

    expect(UnsavedChangesConfirmationDialog).toHaveBeenCalled();
  });
  test("calls cancellation or confirmation dialog upon clicking on volver atras if there are no unsaved changes", async () => {
    const cancelButton = screen.getByText("Volver atrás");
    vi.clearAllMocks();

    const setUnsavedChanges = vi.fn();
    act(() => {
      setUnsavedChanges(false);
    });

    userEvent.click(cancelButton);

    expect(UnsavedChangesConfirmationDialog).not.toHaveBeenCalled();
  });

/*   test('calls navigate when clicking "Ir a la entrevista" button', async () => {
    const id = 1

    const mockNavigate = vi.fn();
  
    const handleGoToInterview = () => {
        mockNavigate(`/applicantInterview/${id}`);
    };
    const interviewButton = screen.getByRole('button', { name: 'Ir a la entrevista' });

    await waitFor(() => {
      expect(interviewButton).toBeTruthy();
      userEvent.click(interviewButton);
    });

    handleGoToInterview();
    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(`/applicantInterview/${id}`);
  });  */
});
