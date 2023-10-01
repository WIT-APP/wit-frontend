/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Field, ErrorMessage, useFormikContext, Form } from 'formik';
import { FormValues } from '@/interfaces/formRegister.interface';
import classnames from 'classnames';
import { Question } from '@/interfaces/question.interface';
import { Button } from './ui/Button';

const pages = ['Personal', 'Sociodemografica', 'Academica', 'Formacion'];

interface FormSectionProps {
  isFetching: boolean;
  isPreviousData: boolean;
  question: Question[];
}

export const FormSection = (props: FormSectionProps) => {

    const {
      isFetching,
      isPreviousData,
      question,
    } = props;

  const [currentPage, setCurrentPage] = useState(0);

  const formik = useFormikContext<FormValues>();


  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNextPage = () => {
    if (!isPreviousData && currentPage < pages.length) {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
    }
  };

  const isCurrentSectionValid = () => {
    if (!question || !formik) {
      console.log("Question or formik is missing.");
      console.log("Question:", question);
      console.log("Question:", formik);
      return false;
    }
    return question.every((q: Question) => {
      const fieldName = q.id_question;
      const isFieldTouched = formik.touched[fieldName];
      const isFieldValid = !formik.errors[fieldName];
  
      console.log("Field Name:", fieldName);
      console.log("Touched:", isFieldTouched);
      console.log("Valid:", isFieldValid);
      if (q.obligatory && isFieldTouched) {
        return isFieldValid;
      }
      return true;
    });
  };
  
  return (
    <>
      {console.log(isCurrentSectionValid())}
      {question?.map((q: Question, index: number) => (
        // Only render questions that belong to the current page
        currentPage === index && (
          <div className="container text-white font-bold mt-5" key={q.id_question}>
            <label htmlFor={q.id_question}>{q.text}</label>
            {/* Render the corresponding input based on q.type */}
            {q.type === 'text' && (
                <Field
                  name={q.id_question}
                  type={q.type}
                  id={q.id_question}
                  placeholder={q.placeholder}
                  className={`mt-2 form-input text-sm text-black2 block w-full focus:ring-yellow2 focus:border-yellow2 px-3 py-2 rounded-md overflow-x-auto p-2.5 placeholder-gray-400 shadow ${
                    formik.touched[q.id_question] && formik.errors[q.id_question] ? 'border-red-500' : ''
                  }`}
                />
              )} 
              {/* ... (Render other input types) */}
          </div>
        )
      ))}
      <div className="flex justify-evenly text-sm mb-4 mt-6">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
          className={classnames('btn-form', 'btn-form-green', {
            invisible: currentPage === 0,
          })}
        >
          Previous Page
        </button>{' '}
        <button
          onClick={goToNextPage}
          disabled={!isCurrentSectionValid() || isPreviousData || currentPage === pages.length - 1}
          className={classnames('btn-form', 'btn-form-green', {
            invisible: currentPage === pages.length - 1,
          })}
          type="button" // Use type="button" to prevent form submission
        >
          Next Page
        </button>
        <button
          disabled={currentPage !== pages.length - 1}
          className={classnames('btn-form', 'btn-form-green', {
            invisible: currentPage !== pages.length - 1,
          })}
          type="submit"
        >
          Enviar
        </button>
      </div>
      {isFetching ? <span>Loading...</span> : null}
    </>
  );
};