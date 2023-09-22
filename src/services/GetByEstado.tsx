import { Applicant } from "@/interfaces/applicant.interface";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

const fetchApplicantsByEstado = async (estado: string): Promise<Applicant[]> => {
    const response = await fetch(`http://localhost:3000/filter-by-estado/${estado}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
  
    // Format dates
    const formattedApplicants = data.map((applicant: Applicant) => ({
      ...applicant,
      fecha_de_applicacion: format(new Date(applicant.fecha_de_applicacion), "dd/MM/yyyy"),
      fecha_de_nacimiento: format(new Date(applicant.fecha_de_nacimiento), "dd/MM/yyyy"),
    }));
  
    return formattedApplicants;
  };
  
  const useFilterByEstado = (estado: string) => {
    const queryKey: QueryKey = ['applicants', estado];
  
    const {
      isLoading,
      isError,
      data: applicants,
    } = useQuery(queryKey, () => fetchApplicantsByEstado(estado));
  
    return {
      isLoading,
      isError,
      applicants,
    };
  };
  
  export default useFilterByEstado;