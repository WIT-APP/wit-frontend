import { useQuery } from "@tanstack/react-query";
import { Applicant } from "../interfaces/applicant.interface";

export const useAllApplicants = () => {
  const {
    isLoading,
    isError,
    data: applicant,
  } = useQuery({
    queryKey: ['applicants'],
    queryFn: async (): Promise<Applicant[]> => {
      const response = await fetch(
       'https://wit-backend-factoriaf5.up.railway.app/applicant'
      );
      const data = await response.json();
      console.log(data)
      return data;
    },
    staleTime: 50000000,
  });

  return {
    isLoading,
    isError,
    applicant,
  };
};
