import { Applicant } from "@/interfaces/applicant.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateApplicantMutation = async ({ id, ...applicant }: Applicant) => {

  // https://wit-backend-factoriaf5.up.railway.app/applicant
  // http://localhost:3000/applicant/${id}
    const response = await fetch(`https://wit-backend-factoriaf5.up.railway.app/applicant/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicant),
    });
  
    if (!response.ok) {
      throw new Error('Failed to update applicant.');
    }
  
    return response.json();
  };
  
  export const useUpdateApplicant = () => {
    const queryClient = useQueryClient();
  
    return useMutation(updateApplicantMutation, {
      onSuccess: () => {
        queryClient.invalidateQueries(['applicants']);
      },
    });
  };