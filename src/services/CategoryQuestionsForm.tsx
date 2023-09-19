import { useQuery } from "@tanstack/react-query";
import { Question } from "../interfaces/question.interface";

export const useCategoryQuestion = (category:string) => {
  const {
    isLoading,
    isError,
    data: question,
  } = useQuery({
    queryKey: ['quetsions'],
    queryFn: async (): Promise<Question[]> => {
      const response = await fetch(
      //  `https://wit-backend-factoriaf5.up.railway.app/question?category=${category}`
      `http://localhost:3000/question?category=${category}`
      );
      const data = await response.json();
      console.log(data)
      return data;
    },
    staleTime: 50000000,
  });

  return {
    isLoading,
    isError,
    question,
  };
};
