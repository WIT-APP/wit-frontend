//carga los datos de react query para pasarselos al component form
import React from "react";
import { PersonalInfo } from "../components/form/PersonalInfo";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import { FormSection } from "../components/FormSection";
// import { Button } from '../components/ui/Button'
import { useCategoryQuestion } from "../services/CategoryQuestionsForm";
import { Footer } from "../components/Footer";

//llamada a la category, personal info recive el metodo que modifica category(state de categorías, custom hook) y el array de datos
const pages = ["Personal", "Sociodemografica", "Academica", "Formacion"];

export const FormPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { isLoading, isError, error, isFetching, isPreviousData, question } =
    useCategoryQuestion(pages[currentPage]);

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
    <div className="md:justify-end md:bg-black-transparent md:bg-[url('/form-image.jpg')]  bg-cover bg-no-repeat bg-left bg-fixed md:mb-16 ">
      <div className="w-129 md:bg-grey-transparent p-4 mx-150 rounded container">
        <h2 className="text-black text-l font-bold mx-3 mt-4">
          Información {pages[currentPage]}
        </h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error?.message}</div>
        ) : (
          <FormSection data={question} />
        )}
        <div className="flex justify-evenly text-sm">
          <button onClick={goToPreviousPage} disabled={currentPage === 0}>
            Previous Page
          </button>{" "}
          <button
            onClick={goToNextPage}
            disabled={isPreviousData || currentPage === pages.length - 1}
          >
            Next Page
          </button>
          <button
            className="custom-button"
            onClick={onSubmit}
            disabled={currentPage !== pages.length - 1}
          >
            Enviar
          </button>
        </div>
        {isFetching ? <span> Loading...</span> : null}{" "}
      </div>

      <Footer />
    </div>
  );
};
