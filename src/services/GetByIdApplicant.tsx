import { Applicant } from "@/interfaces/applicant.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetByIdApplicant = (id?: number | string) => {
  const { data: oneApplicant, isLoading, isError } = useQuery({
    queryKey: ["applicants", id],
    queryFn: async (): Promise<Applicant> => {

      // https://wit-backend-factoriaf5.up.railway.app/applicant/id/${id}
      // http://localhost:3000/applicant/id/${id}
      const response = await fetch(`https://wit-backend-factoriaf5.up.railway.app/applicant/id/${id}`);
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