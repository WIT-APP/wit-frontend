import { Interview } from "@/interfaces/interview.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetInterviewByApplicant = (id?: number | string) => {
  const token = localStorage.getItem('token'); 

  const { data: oneInterview, isLoading, isError } = useQuery({
    queryKey: ["interview", id],
    queryFn: async (): Promise<Interview> => {

      const response = await fetch(`https://wit-backend-factoriaf5.up.railway.app/interview/applicant/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch applicant details.');
      }
      const data = await response.json();
      return data;
    }
  })

  return {
    oneInterview,
    isLoading,
    isError,
  };
};