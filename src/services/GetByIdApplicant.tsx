import { Applicant } from "@/interfaces/applicant.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetByIdApplicant = (id?: number | string) => {
  const token = localStorage.getItem('token'); 

  const { data: oneApplicant, isLoading, isError } = useQuery({
    queryKey: ["applicants", id],
    queryFn: async (): Promise<Applicant> => {

      // https://wit-backend-factoriaf5.up.railway.app/applicant/id/${id}
      // http://localhost:3000/applicant/id/${id}
      //https://wit-backend-factoriaf5.up.railway.app/applicant/id/${id}
      const response = await fetch(`http://localhost:3000/applicant/id/${id}`,
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
    oneApplicant,
    isLoading,
    isError,
  };
};