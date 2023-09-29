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
        <CardTitle>Applicant Information</CardTitle>
        <CardDescription>
          Display and modify applicant information.
        </CardDescription>
      </CardHeader>
    <CardContent className="grid gap-6 max-h-[80vh] overflow-y-auto grid-cols-1 md:grid-cols-2">
  {labelsArray.map(({ key, label }) => (
    <div key={key} className="grid gap-2">
      <Label key={key}>
        {label}
        <input
          id={key}
          type="text"
          value={(applicantInfo?.[key as keyof Applicant] || "").toString()}
          onChange={(e) =>
            handleInputChange(key as keyof Applicant, e.target.value)
          }
          className="px-3 py-2 border rounded-md w-full"
        />
      </Label>
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
