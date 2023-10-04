import { Interview } from "@/interfaces/interview.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createInterviewMutation = async ({
  applicant,
  ...interview
}: Interview) => {
  const token = localStorage.getItem("token");

  //https://wit-backend-factoriaf5.up.railway.app/interview/applicant/${applicant}
  // http://localhost:3000/interview/applicant/${applicant}
  const response = await fetch(
    `https://wit-backend-factoriaf5.up.railway.app/interview/applicant/${applicant}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(interview),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to CREATE interview.");
  }

  return response.json();
};

export const useCreateInterview = () => {
  const queryClient = useQueryClient();

  return useMutation(createInterviewMutation, {
    onSuccess: () => {
      queryClient.invalidateQueries(["interview"]);
    },
  });
};
