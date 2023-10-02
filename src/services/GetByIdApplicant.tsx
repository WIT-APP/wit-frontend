import { Applicant } from "@/interfaces/applicant.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetByIdApplicant = (id?: number | string) => {
  const { data: oneApplicant, isLoading, isError } = useQuery({
    queryKey: ["applicants", id],
    queryFn: async (): Promise<Applicant> => {
      const response = await fetch(`http://localhost:3000/applicant/id/${id}`);
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