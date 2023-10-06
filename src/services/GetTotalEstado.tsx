import { useQuery } from "@tanstack/react-query";

export interface TotalesEstado {
  estado: string | undefined;
  count: number;
}

export const useGetTotalEstado = () => {
  const token = localStorage.getItem('token'); 

  const { data: totalesEstado, isLoading, isError } = useQuery({
    queryKey: ["totalestado"],
    queryFn: async (): Promise<TotalesEstado> => {

      const response = await fetch(`https://wit-backend-factoriaf5.up.railway.app/applicant/estado/count`,
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
    totalesEstado,
    isLoading,
    isError,
  };
};