import { Interview } from "@/interfaces/interview.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetInterviewByApplicant = (id?: number | string) => {
  const { data: oneInterview, isLoading, isError } = useQuery({
    queryKey: ["interview", id],
    queryFn: async (): Promise<Interview> => {

      // https://wit-backend-factoriaf5.up.railway.app/interview/applicant/${id}
      // http://localhost:3000/interview/applicant/${id}
      const response = await fetch(`http://localhost:3000/interview/applicant/${id}`);
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