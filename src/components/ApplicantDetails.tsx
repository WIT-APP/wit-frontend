import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetByIdApplicant } from "@/services/GetByIdApplicant";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { useUpdateApplicant } from "@/services/UpdateApplicant";
import labelsArray from "../data/interview-labels.data.json";
import { useNavigate, useParams } from "react-router-dom";
import { Applicant } from "@/interfaces/applicant.interface";
import { UnsavedChangesConfirmationDialog } from "./UnsavedChangesDialog";

export const ApplicantDetails = () => {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { oneApplicant, isLoading, isError } = useGetByIdApplicant(id);

  const useUpdateApplicantMutation = useUpdateApplicant();

  const [applicantInfo, setApplicantInfo] = useState<Applicant | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    if (!isLoading && !isError && oneApplicant) {
      setApplicantInfo(oneApplicant);
    }
  }, [oneApplicant, isLoading, isError]);

  const compareApplicants = (applicantA:any, applicantB:any) => {
    const keys = Object.keys(applicantA);
    for (const key of keys) {
      if (applicantA[key] !== applicantB[key]) {
          return false; 
        
      }
    }
    return true;
  };

  useEffect(() => {
    if (applicantInfo) {
      const hasUnsavedChanges = !compareApplicants(applicantInfo, oneApplicant);
      setUnsavedChanges(hasUnsavedChanges);
    }
  }, [applicantInfo, oneApplicant]);

  const handleInputChange = (field: keyof Applicant, value: string) => {
    if (applicantInfo) {
      setApplicantInfo((prevApplicantInfo) => ({
        ...(prevApplicantInfo as Applicant),
        [field]: value,
      }));
    }
  };
  const handleSubmit = async () => {
    if (applicantInfo) {
      try {
        const applicantId = typeof id === "string" ? parseInt(id, 10) : id;

        if (typeof applicantId !== "number" || isNaN(applicantId)) {
          console.error("Invalid applicant ID");
          return;
        }

        await useUpdateApplicantMutation.mutateAsync({
          ...applicantInfo,
          id: applicantId,
        });
        queryClient.invalidateQueries(["applicants", applicantId]);
        console.log("Applicant information updated successfully.");
      } catch (error) {
        console.error("Error updating applicant information:", error);
      }
    }
  };
  const navigate = useNavigate();

  const handleCancel = () => {
    if (unsavedChanges) {
      setShowConfirmation(true);
    } else {
      navigate(-1); 
    }
  };

  const handleConfirmationContinue = () => {
    navigate(-1); 
    setShowConfirmation(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información del Aspirante</CardTitle>
        <CardDescription>
          Mostrar y modificar la información del aspirante.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 max-h-[70vh] overflow-y-auto">
        {Array.from(new Set(labelsArray.map((item) => item.category))).map((category) => (
          <div key={category}>
            <h2 className="text-lg font-bold mb-2">{category}</h2>
            <div
        className={`grid gap-2 ${
          category === "Personal" || category === "Academica" || category === "Sociodemografica"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
      >              {labelsArray
                .filter((item) => item.category === category)
                .map(({ key, label }) => (
                  <div key={key}>
                    <Label>
                      {label}
                      <textarea
                        id={key}
                        value={(applicantInfo?.[key as keyof Applicant] || "").toString()}
                        onChange={(e) =>
                          handleInputChange(key as keyof Applicant, e.target.value)
                        }
                        className="px-3 py-2 border rounded-md"
                        style={{ minWidth: '100%', resize: 'vertical' }}
                      />
                    </Label>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="justify-between space-x-2">
      <UnsavedChangesConfirmationDialog
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)} 
          onContinue={handleConfirmationContinue}
        />
          <Button onClick={handleCancel}>Cancelar</Button>
        <Button onClick={handleSubmit}>Enviar</Button>
      </CardFooter>
    </Card>
  );
};
