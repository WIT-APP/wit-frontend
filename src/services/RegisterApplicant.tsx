import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Applicant } from "../interfaces/applicant.interface";

const newApplication = async (applicant: Applicant) => {
  const response = await fetch(
    "https://wit-backend-factoriaf5.up.railway.app/applicant",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicant),
    }
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "");
  }
  const result = await response.json();

  return result;
};

const queryClient = useQueryClient();


export const useNewApplication = () => {
  return useMutation(newApplication, {
    onSuccess: () => {
        console.log("New application submitted")
        queryClient.invalidateQueries(["applicants"]);

    },
  });
};
