import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateApplicant } from "../interfaces/applicant.interface";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () =>
  toast.success("Su aplicacion ha sido completada ! Gracias !", {
    position: "top-center",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const notifyError = () =>
  toast.error("Hay un error en su aplicacion, debe verificar los campos", {
    position: "top-center",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const newApplication = async (applicant: CreateApplicant) => {
  const response = await fetch(
    // "https://wit-backend-factoriaf5.up.railway.app/applicant",
    // 'http://localhost:3000/applicant',
    'https://wit-backend-factoriaf5.up.railway.app/applicant',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicant),
    }
  );
  if (!response.ok) {
    notifyError();
    const error = await response.json();
    throw new Error(error.message || "");
  }
  notify();
  const result = await response.json();
  return result;
};


export const useNewApplication = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (applicant: CreateApplicant) => newApplication(applicant),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["applicants"]);
      },
    }
  );
};
