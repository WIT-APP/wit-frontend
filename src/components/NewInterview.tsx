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
  import { Button } from "./ui/Button";
  import labelsArray from "../data/interview-labels.data.json";
  import { useNavigate, useParams } from "react-router-dom";
  import { Textarea } from "./ui/textarea";
import { Interview } from "@/interfaces/interview.interface";
import { UnsavedChangesConfirmationDialog } from "./alerts/UnsavedChangesDialog";
import { ChangesSavedDialog } from "./alerts/ChangesSavedDialog";
import { useCreateInterview } from "@/services/CreateInterview";
import { UpdateEstado } from "@/services/UpdateEstado";
  
  export const NewInterview = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();
  
    const [defaultInterviewInfo] = useState<Interview> ({
      motivacion_curso: "",
      soporte_it: "",
      desempeno_laboral: "",
      situacion_actual: "",
      otros_cursos: "",
      cual_curso: "",
      disponibilidad: "",
      participar_zoom: "",
      encontrar_trabajo: "",
      ajuste_calendario: "",
      conexion_semanal: "",
      conocer_curso: "",
      beca_otra: "",
      completado_mydigiskills: "",
      mas_informacion: "",
      aplicante_apto: "",
      que_es_programacion: "",
      nivel_entrevistado: "",
      logica_caracol: "",
      nivel_ingles: "",
    });

    const useCreateInterviewMutation = useCreateInterview();
    const [interviewInfo, setInterviewInfo] = useState<Interview | null>(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [unsavedChanges, setUnsavedChanges] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    

  
    useEffect(() => {
        setInterviewInfo(defaultInterviewInfo);

    }, [defaultInterviewInfo]);
  
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
        const hasUnsavedChanges = !compareInterview(interviewInfo, defaultInterviewInfo);
        setUnsavedChanges(hasUnsavedChanges);
      }
    }, [interviewInfo, defaultInterviewInfo]);
  
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
          await useCreateInterviewMutation.mutateAsync({
              applicant: applicantId,
            ...interviewInfo,
          });
          await UpdateEstado(applicantId, "Entrevistado");
          queryClient.invalidateQueries(["applicants", applicantId]);
          console.log("Applicant Interview created successfully.");
          setShowSuccessModal(true);
        } catch (error) {
            console.error("Error creating applicant interview:", error);
        }
    }
    };
  
    const handleSuccessModalClose = () => {
      setShowSuccessModal(false);
      navigate(`/applicantDetails/${id}`)
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
            Rellena la Entrevista del aspirante.
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