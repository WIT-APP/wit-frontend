import { useQuery } from "@tanstack/react-query";

export interface TotalesCursos {
  programa_cursar: string;
  count: number;
}

export const useGetTotalCursosByEstado = () => {
  const token = localStorage.getItem('token'); 

  const { data: totalCursos, isLoading, isError } = useQuery({
    queryKey: ["totalcursos"],
    queryFn: async (): Promise<TotalesCursos> => {

      const response = await fetch(`https://wit-backend-factoriaf5.up.railway.app/applicant/curso/count?estado=Matriculado`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch get total for estado.');
      }
      const data = await response.json();
      return data;
    }
  })

  return {
    totalCursos,
    isLoading,
    isError,
  };
};