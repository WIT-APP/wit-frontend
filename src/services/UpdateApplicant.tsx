import { Applicant } from "@/interfaces/applicant.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateApplicantMutation = async ({ id, ...applicant }: Applicant) => {
  
    const response = await fetch(`http://localhost:3000/applicant/${id}/profile`, {
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