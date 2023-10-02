/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutationFunction, useMutation, useQueryClient } from "@tanstack/react-query";

const setEstadoEntrevistadoMutation: MutationFunction<any, [string | number, string]> = async (variables: [string | number, string]) => {
    const [id, nuevoEstado] = variables;
    const response = await fetch(`http://localhost:3000/applicant/update-estado/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ estado: nuevoEstado }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to update applicant.');
    }
  
    return response.json();
  };
  
  export const useSetEstadoEntrevistado = () => {
    const queryClient = useQueryClient();
  
    return useMutation(setEstadoEntrevistadoMutation, {
      onSuccess: () => {
        queryClient.invalidateQueries(['applicants']);
      },
    });
  };