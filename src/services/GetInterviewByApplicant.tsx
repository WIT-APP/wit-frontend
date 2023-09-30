import { Interview } from "@/interfaces/interview.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetInterviewByApplicant = (id?: number | string) => {
  const { data: oneApplicant, isLoading, isError } = useQuery({
    queryKey: ["applicants", id],
    queryFn: async (): Promise<Interview> => {
      const response = await fetch(`http://localhost:3000/interview/applicant/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch applicant details.');
      }
      const data = await response.json();
      return data;
    }
  })

  return {
    oneApplicant,
    isLoading,
    isError,
  };
};