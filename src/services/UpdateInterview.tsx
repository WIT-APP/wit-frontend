import { Interview } from "@/interfaces/interview.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateInterviewMutation = async ({ applicant, ...interview }: Interview) => {
  const token = localStorage.getItem('token'); 
  
    const response = await fetch(`https://wit-backend-factoriaf5.up.railway.app/interview/applicant/${applicant}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 

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