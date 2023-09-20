//carga los datos de react query para pasarselos al component form 
import { useState } from 'react'
import { FormSection } from '../components/form/FormSection'
// import { Footer } from '../components/Footer'
// import { Button } from '../components/ui/Button'
import { useCategoryQuestion } from '../services/CategoryQuestionsForm'
// import { Question } from '../interfaces/question.interface'


//llamada a la category, personal info recive el metodo que modifica category(state de categorías, custom hook) y el array de datos
const pages = [
  'Personal',
  'Sociodemografica',
  'Academica',
  'Formacion'
]

export const FormPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  // const [questionsData, setQuestionsData] = useState<Question[] | undefined>(undefined);

  const {
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
    question,
  } = useCategoryQuestion(pages[currentPage]);


  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNextPage = () => {
    if (!isPreviousData && currentPage < pages.length) {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
    }
  };

  const onSubmit = () => {};
  
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error?.message}</div>
      ) : (
        <FormSection data={question}/>
      )}
      <span>Current Page: {pages[currentPage]}</span>
      <button onClick={goToPreviousPage} disabled={currentPage === 0}>
        Previous Page
      </button>{' '}
      <button
        onClick={goToNextPage}
        disabled={isPreviousData || currentPage == pages.length}
      >
        Next Page
      </button>
      <button
        onClick={onSubmit}
      >
        Enviar
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
  );
}
