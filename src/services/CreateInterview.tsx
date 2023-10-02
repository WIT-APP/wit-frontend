import { Interview } from "@/interfaces/interview.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createInterviewMutation = async ({ applicant, ...interview }: Interview) => {
  
    const response = await fetch(`http://localhost:3000/interview/applicant/${applicant}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(interview),
    });
  
    if (!response.ok) {
      throw new Error('Failed to CREATE interview.');
    }
  
    return response.json();
  };
  
  export const useCreateInterview = () => {
    const queryClient = useQueryClient();
  
    return useMutation(createInterviewMutation, {
      onSuccess: () => {
        queryClient.invalidateQueries(['interview']);
      },
    });

    
  };