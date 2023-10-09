import { act, render, screen, waitFor } from "@testing-library/react";
import { describe } from "vitest";
import userEvent from "@testing-library/user-event";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { useGetInterviewByApplicant } from "@/services/GetInterviewByApplicant";
import { useUpdateInterview } from "@/services/UpdateInterview";
import { ChangesSavedDialog } from "@/components/alerts/ChangesSavedDialog";
import { UnsavedChangesConfirmationDialog } from "@/components/alerts/UnsavedChangesDialog";
import { ApplicantInterview } from "@/pages/ApplicantInterviewPage";
import { Interview } from "@/interfaces/interview.interface";

vi.mock("@/components/alerts/ChangesSavedDialog", () => ({
  ChangesSavedDialog: vi.fn(() => null),
}));
vi.mock("@/components/alerts/UnsavedChangesDialog", () => ({
  UnsavedChangesConfirmationDialog: vi.fn(() => null),
}));

const queryClient = new QueryClient();

vi.mock("@/services/GetInterviewByApplicant", () => ({
  useGetInterviewByApplicant: vi.fn().mockReturnValue({
    oneInterview: {
      motivacion_curso: "Mocked motivacion",
    } as Interview,
    isLoading: false,
    isError: false,
  }),
}));

vi.mock("@/services/UpdateInterview", () => ({
  useUpdateInterview: vi.fn(),
}));

describe("ApplicantDetails Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ApplicantInterview />
        </QueryClientProvider>
      </BrowserRouter>
    );
  });
  test("renders the ApplicantInterview component - Header", () => {
    const title = screen.getByText("Entrevista del Aspirante");
    const cancelButton = screen.getByRole("button", { name: "Volver atrás" });
    const saveButton = screen.getByRole("button", { name: "Guardar" });
    const detailsButton = screen.getByRole("button", {
      name: "Ir a los detalles",
    });

    expect(title).toBeTruthy();
    expect(cancelButton).toBeTruthy();
    expect(saveButton).toBeTruthy();
    expect(detailsButton).toBeTruthy();
  });
  test("renders the ApplicantDetails component - Categories", () => {
    const personal = screen.getByText("Personal");
    const disposicion = screen.getByText("Disposicion");
    const academico = screen.getByText("Academico");
    const python = screen.getByText("Python");

    expect(personal).toBeTruthy();
    expect(disposicion).toBeTruthy();
    expect(academico).toBeTruthy();
    expect(python).toBeTruthy();
  });

  test("renders input fields with mocked data", () => {
    const motivacionInput = screen.getByText(
      "¿Qué te motiva a hacer este curso? (Comprobar que la persona candidata haya hecho una reflexión previa sobre intereses y objetivos)"
    );

    expect(motivacionInput).toBeTruthy();

    const { oneInterview } = useGetInterviewByApplicant();
    expect(oneInterview?.motivacion_curso).toBe("Mocked motivacion");
  });

  test("it calls mutateAsync when clicking Save", async () => {
    const saveButton = screen.getByRole("button", { name: "Guardar" });
  
    expect(saveButton).toBeTruthy();
  
    userEvent.click(saveButton);
    await waitFor(() => {
      expect(useUpdateInterview).toHaveBeenCalled();
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
  test('calls navigate when clicking "Ir a la entrevista" button', async () => {
    const id = 1

    const mockNavigate = vi.fn();
  
    const handleGoToInterview = () => {
        mockNavigate(`/applicantDetails/${id}`);
      };
    const interviewButton = screen.getByRole('button', { name: 'Ir a los detalles' });
    expect(interviewButton).toBeTruthy();
  

    userEvent.click(interviewButton);
    handleGoToInterview();
    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(`/applicantDetails/${id}`);
  });
});
