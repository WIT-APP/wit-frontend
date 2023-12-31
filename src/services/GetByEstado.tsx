import { Applicant } from "@/interfaces/applicant.interface";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";


const useFilterByEstado = (estado: string) => {
    const token = localStorage.getItem('token'); 
    const { isLoading, isError, data: formattedApplicants } = useQuery({
        queryKey: ["applicants", estado],
        queryFn: async () => {
            try {
                const response = await fetch(`https://wit-backend-factoriaf5.up.railway.app/applicant/filter-by-estado/${estado} `, {
                    headers: {
                      'Authorization': `Bearer ${token}`, 
                      'Content-Type': 'application/json', 
                    },
                });
                const data = await response.json();           

            const formattedApplicants = data.map((applicant: Applicant) => ({
                ...applicant,
                fecha_de_applicacion: applicant.fecha_de_applicacion
                ? format(new Date(applicant.fecha_de_applicacion), "dd/MM/yyyy")
                : "",
              fecha_de_nacimiento: applicant.fecha_de_nacimiento
                ? format(new Date(applicant.fecha_de_nacimiento), "dd/MM/yyyy")
                : "",
              telefono: applicant.telefono ? applicant.telefono.toString() : "",

            }));
            return formattedApplicants;
            } catch (error) {
                console.error("Error fetching data:", error);
                return []; // Retorna un array vacío en caso de error
            }
        },
        staleTime: 1000 * 60 * 10,
    })
    return { isLoading, isError, formattedApplicants };
}
  export default useFilterByEstado;