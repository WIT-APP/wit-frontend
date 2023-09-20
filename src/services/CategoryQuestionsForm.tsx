import { useQuery } from "@tanstack/react-query";
import { Question } from "../interfaces/question.interface";



const fetchQuestions = async (category: string): Promise<Question[]|undefined> => {
  try {
    const response = await fetch(`http://localhost:3000/question?category=${category}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching questions:', error);
  }

};

export const useCategoryQuestion = (category: string) => {
  const {
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
    data: question,
  } = useQuery<Question[]|undefined,Error>(['questions', category], () => fetchQuestions(category), {
    staleTime: 50000000,
    keepPreviousData: true,
    useErrorBoundary: true,
  });

  return {
    isLoading,
    isError,
    error,
    question,
    isFetching,
    isPreviousData,
  };
};
