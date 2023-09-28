import { useQuery } from "@tanstack/react-query";
import { Applicant } from "../interfaces/applicant.interface";
import { format } from "date-fns";


export const usePreApprovedApplicants = () => {
  const {
    isLoading,
    isError,
    data: applicant,
  } = useQuery({
    queryKey: ['applicants'],
    queryFn: async (): Promise<Applicant[]> => {
      const response = await fetch(
      //  'https://wit-backend-factoriaf5.up.railway.app/applicant/preapproved-applicants'
      'http://localhost:3000/applicant/preapprovguit ed-applicants'
      );
      const data = await response.json();
      console.log(data)
      // Formatea la fecha de nacimiento en cada solicitante
    const formattedApplicants = data.map((applicant: Applicant) => ({
      ...applicant,
      fecha_de_applicacion: format(new Date(applicant.fecha_de_applicacion), "dd/MM/yyyy"),
      fecha_de_nacimiento: format(new Date(applicant.fecha_de_nacimiento), "dd/MM/yyyy"),
    }));

    return formattedApplicants;
      // return data;
    },
    staleTime: 50000000,
  });

  return {
    isLoading,
    isError,
    applicant,
  };
};
