/* eslint-disable @typescript-eslint/no-explicit-any */
import { Applicant } from "@/interfaces/applicant.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const setEstadoEntrevistadoMutation = async ({id, estado}: Applicant) => {

    const response = await fetch(`http://localhost:3000/applicant/update-estado/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ estado: estado }),
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