/* eslint-disable @typescript-eslint/no-explicit-any */
import { Applicant } from "@/interfaces/applicant.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const setEstadoEntrevistadoMutation = async ({ id, estado }: Applicant) => {
  const token = localStorage.getItem('token'); 


  // https://wit-backend-factoriaf5.up.railway.app/applicant/update-estado/${id}
  // http://localhost:3000/applicant/update-estado/${id}
    const response = await fetch(`https://wit-backend-factoriaf5.up.railway.app/applicant/update-estado/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
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