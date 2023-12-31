/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Label } from "@radix-ui/react-dropdown-menu";
  import { useQueryClient } from "@tanstack/react-query";
  import { useState, useEffect } from "react";
  import { Button } from "../components/ui/Button";
  import labelsArray from "../data/interview-labels.data.json";
  import { useNavigate, useParams } from "react-router-dom";
  import { Textarea } from "../components/ui/textarea";
import { useGetInterviewByApplicant } from "@/services/GetInterviewByApplicant";
import { Interview } from "@/interfaces/interview.interface";
import { useUpdateInterview } from "@/services/UpdateInterview";
import { UnsavedChangesConfirmationDialog } from "../components/alerts/UnsavedChangesDialog";
import { ChangesSavedDialog } from "../components/alerts/ChangesSavedDialog";
  
  export const ApplicantInterview = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const { oneInterview, isLoading, isError } = useGetInterviewByApplicant(id);
    const useUpdateInterviewMutation = useUpdateInterview();
    const [interviewInfo, setInterviewInfo] = useState<Interview | null>(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [unsavedChanges, setUnsavedChanges] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

  
    useEffect(() => {
      if (!isLoading && !isError && oneInterview) {
        setInterviewInfo(oneInterview);
      }
    }, [oneInterview, isLoading, isError]);
  
    const compareInterview = (interviewA: any, interviewB: any) => {
      const keys = Object.keys(interviewA);
      for (const key of keys) {
        if (interviewA[key] !== interviewB[key]) {
          return false;
        }
      }
      return true;
    };
  
    useEffect(() => {
      if (interviewInfo) {
        const hasUnsavedChanges = !compareInterview(interviewInfo, oneInterview);
        setUnsavedChanges(hasUnsavedChanges);
      }
    }, [interviewInfo, oneInterview]);
  
    const handleInputChange = (field: keyof Interview, value: string) => {
      if (interviewInfo) {
        setInterviewInfo((prevInterviewInfo) => ({
          ...(prevInterviewInfo as Interview),
          [field]: value,
        }));
      }
    };
    const handleSubmit = async () => {
      if (interviewInfo) {
        try {
          const applicantId = typeof id === "string" ? parseInt(id, 10) : id;
  
          if (typeof applicantId !== "number" || isNaN(applicantId)) {
            console.error("Invalid applicant ID");
            return;
          }
  
          await useUpdateInterviewMutation.mutateAsync({
            ...interviewInfo,
            id: applicantId,
          });
          queryClient.invalidateQueries(["applicants", applicantId]);
          setShowSuccessModal(true);
        } catch (error) {
          console.error("Error updating applicant information:", error);
        }
      }
    };
  
    const handleSuccessModalClose = () => {
      setShowSuccessModal(false);
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

    const handleGoToDetails = () => {
      navigate(`/applicantDetails/${id}`);
    };

    return (
      <Card>
        <CardHeader className="bg-lightgreen2 rounded flex justify-between">
          <CardTitle>Entrevista del Aspirante</CardTitle>
          <CardDescription>
            Mostrar y modificar la Entrevista del aspirante.
          </CardDescription>
          <div className="flex justify-end space-x-2 ">
            <UnsavedChangesConfirmationDialog
              isOpen={showConfirmation}
              onClose={() => setShowConfirmation(false)}
              onContinue={handleConfirmationContinue}
            />
            <ChangesSavedDialog
              isOpen={showSuccessModal}
              onClose={handleSuccessModalClose}
            />
            <Button className="btn-form-green" onClick={handleCancel}>
              Volver atrás
            </Button>
            <Button className="btn-form-green" onClick={handleGoToDetails}>
              Ir a los detalles
            </Button>
            <Button className="btn-form-green" onClick={handleSubmit}>
              Guardar
            </Button>
            
          </div>
        </CardHeader>
        <CardContent className="grid py-2 gap-6 max-h-[70vh] lg:max-h-[75vh] overflow-y-auto">
          {Array.from(new Set(labelsArray.map((item) => item.category))).map(
            (category) => (
              <div key={category}>
                <h2 className="text-xl font-bold mb-2 p-1 bg-green2">
                  {category}
                </h2>
                <div
                  className={`grid gap-6 grid-cols-1 sm:p-5`}
                >
                  {labelsArray
                    .filter((item) => item.category === category)
                    .map(({ key, label, type }) => (
                      <div key={key}>
                        <Label className="font-semibold">
                          {label}
                          {type === "textarea" ? (
                            <Textarea
                              id={key}
                              value={(
                                interviewInfo?.[key as keyof Interview] || ""
                              ).toString()}
                              onChange={(e) =>
                                handleInputChange(
                                  key as keyof Interview,
                                  e.target.value
                                )
                              }
                              className="px-3 py-2 border-2 rounded-md font-normal"
                              style={{ minWidth: "100%", resize: "vertical" }}
                            />
                          ) : (
                            <input
                              type="text"
                              id={key}
                              value={(
                                interviewInfo?.[key as keyof Interview] || ""
                              ).toString()}
                              onChange={(e) =>
                                handleInputChange(
                                  key as keyof Interview,
                                  e.target.value
                                )
                              }
                                className="px-3 py-2 border-2 rounded-md font-normal w-full"
                            />
                          )}
                        </Label>
                      </div>
                    ))}
                </div>
              </div>
            )
          )}
        </CardContent>
      </Card>
    );
  };


