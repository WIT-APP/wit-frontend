import { useQuery } from "@tanstack/react-query";
import { Applicant } from "../interfaces/applicant.interface";


export const useAllApplicants = () => {
    const { isLoading, isError, data: applicant} = useQuery({
        queryKey: ['applicants'],
        queryFn: async (): Promise<Applicant[]> => {
            const response = await fetch('http://localhost:3000/applicant');
            const data = await response.json();
            return data
        },
        staleTime: 50000000,
    })

    return {
        isLoading,
        isError,
        applicant
    }
}