import { Interview } from "@/interfaces/interview.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateInterviewMutation = async ({ applicant, ...interview }: Interview) => {
  
    const response = await fetch(`http://localhost:3000/interview/applicant/${applicant}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(interview),
    });
  
    if (!response.ok) {
      throw new Error('Failed to update interview.');
    }
  
    return response.json();
  };
  
  export const useUpdateInterview = () => {
    const queryClient = useQueryClient();
  
    return useMutation(updateInterviewMutation, {
      onSuccess: () => {
        queryClient.invalidateQueries(['interview']);
      },
    });
  };