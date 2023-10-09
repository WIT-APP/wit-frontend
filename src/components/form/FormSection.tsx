/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ErrorMessage, useFormikContext, Form } from "formik";
import { FormValues } from "@/interfaces/formRegister.interface";
import classnames from "classnames";
import { Question } from "@/interfaces/question.interface";
import { Progress } from "@/components/ui/progress"
import { useState } from "react";

const pages = ["Personal", "Sociodemografica", "Academica", "Formacion"];

interface FormSectionProps {
  isFetching: boolean;
  isPreviousData: boolean;
  question: Question[];
  currentPage: number;
  scrollTop: ()=> void;
  onPageChange: (newPage: number) => void;
}

export const FormSection = (props: FormSectionProps) => {
  const { isFetching, isPreviousData, question, currentPage, onPageChange, scrollTop } =
    props;

  const [progress, setProgress] = useState(25)

  const formik = useFormikContext<FormValues>();

  const goToNextPage = () => {
    if (!isPreviousData && currentPage < pages.length) {
      const nextPage= Math.min(currentPage + 1, pages.length - 1)
      scrollTop()
      onPageChange(nextPage);
      setProgress(progress+25)
    }
  };

  const goToPreviousPage = () => {
    scrollTop()
    onPageChange(Math.max(currentPage - 1, 0));
    setProgress(progress-25)
  };

  return (
    <div >
      <Form>
      {question?.map(
        (q: Question) =>
          currentPage === currentPage && (
            <div
              className="container text-gray-100 mt-5 "
              key={q.id_question}
            >
             { !q.obligatory ? (
             
              <label htmlFor={q.id_question} className="font-bold">
                {q.text} {" "}<span className="text-gray2 text-sm  italic ">Opcional</span>
              </label>
              ) : 
              <label htmlFor={q.id_question} className="font-bold">{q.text}</label>
              }      
              {q.type === "text" && (
                <Field
                  name={q.id_question}
                  type={q.type}
                  id={q.id_question}
                  placeholder={q.placeholder}
                  className={`mt-2 form-input text-sm  text-black2 block w-full focus:ring-yellow2 focus:border-yellow2 px-3 py-2 rounded-md overflow-x-auto p-2.5 placeholder-gray-400 shadow ${
                    formik.touched[q.id_question] &&
                    formik.errors[q.id_question]
                      ? "border-red-500"
                      : ""
                  }`}
                />
              )}
              {q.type === "textarea" && (
                <Field
                  name={q.id_question}
                  type="textarea"
                  component={q.type}
                  id={q.id_question}
                  placeholder={q.placeholder}
                  required={q.obligatory}
                  className={`mt-2 form-input text-sm text-black2 block w-full focus:ring-yellow2 focus:border-yellow2 px-3 py-2 rounded-md overflow-x-auto  p-2.5 placeholder-gray-400 shadow ${
                    !formik.isValid && !formik.dirty ? "border-red-500" : ""
                  }`}
                />
              )}
              {q.type === "date" && (
                <Field
                  name={q.id_question}
                  type={q.type}
                  id={q.id_question}
                  placeholder={q.placeholder}
                  required={q.obligatory}
                  className={`mt-2 form-input text-sm text-black2 block w-full focus:ring-yellow2 focus:border-yellow2 px-3 py-2 rounded-md overflow-x-auto  p-2.5 placeholder-gray-400 shadow ${
                    formik.touched[q.id_question] &&
                    formik.errors[q.id_question]
                      ? "border-red-500"
                      : ""
                  }`}
                />
              )}
              {q.type === "email" && (
                <Field
                  name={q.id_question}
                  type={q.type}
                  id={q.id_question}
                  placeholder={q.placeholder}
                  required={q.obligatory}
                  className={`mt-2 form-input text-sm text-black2 block w-full focus:ring-yellow2 focus:border-yellow2 px-3 py-2 rounded-md overflow-x-auto  p-2.5 placeholder-gray-400 shadow ${
                    formik.touched[q.id_question] &&
                    formik.errors[q.id_question]
                      ? "border-red-500"
                      : ""
                  }`}
                />
              )}
              {q.type === "phone" && (
                <Field
                  name={q.id_question}
                  type={q.type}
                  id={q.id_question}
                  placeholder={q.placeholder}
                  required={q.obligatory}
                  className={`mt-2 form-input text-sm text-black2 block w-full focus:ring-yellow2 focus:border-yellow2 px-3 py-2 rounded-md overflow-x-auto  p-2.5 placeholder-gray-400 shadow ${
                    formik.touched[q.id_question] &&
                    formik.errors[q.id_question]
                      ? "border-red-500"
                      : ""
                  }`}
                />
              )}
              {q.type === "checkbox" && (
                <div className="text-white mt-5 mr-2 align-center items-center">
                  {q.options.map((option) => (
                    <label
                      key={option}
                      className="ml-2 text-md font-sm text-white relative flex items-center"
                    >
                      <Field
                        type="checkbox"
                        name={q.id_question}
                        value={option}
                        className={`mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 block ${
                          formik.touched[q.id_question] &&
                          formik.errors[q.id_question]
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {q.type === "toggle" && (
                <div>
                  {q.options.map((option) => (
                    <label
                      key={option}
                      className="relative inline-flex text-white items-center mb-4 cursor-pointer"
                    >
                      <Field
                        type="checkbox"
                        name={q.id_question}
                        value={option}
                        className="sr-only peer"
                      />
                      <div
                        className={`w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-lightgray2 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow2 ${
                          formik.touched[q.id_question] &&
                          formik.errors[q.id_question]
                            ? "border-red-500"
                            : ""
                        }`}
                      ></div>
                      <span className="ml-3 text-sm font-medium text-white">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              )}
              {q.type === "select" && (
                <Field
                  as="select"
                  name={q.id_question}
                  id={q.id_question}
                  required={q.obligatory}
                  className={`font-normal text-sm w-full px-3 text-justify mb-2 mr-2 rounded-md focus:ring-yellow2 focus:border-yellow2 block p-2.5 placeholder-gray-400 text-black2 shadow mt-2 ${
                    formik.touched[q.id_question] &&
                    formik.errors[q.id_question]
                      ? "border-red-500"
                      : ""
                  }`}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {q.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              )}
              {q.type === "radio" && (
                <div
                  className={`items-center text-white  mb-2 mr-2 block  ${
                    !formik.isValid && !formik.dirty ? "border-red-500" : ""
                  }`}
                >
                  {q.options.map((option) => (
                    <div
                      key={option}
                      className={`flex flex-column items-center text-white mt-2 mr-2 ${
                        formik.touched[q.id_question] &&
                        formik.errors[q.id_question]
                          ? "border-red-500"
                          : ""
                      }`}
                    >
                      <label>
                        <Field
                          type="radio"
                          name={q.id_question}
                          value={option}
                          required={q.obligatory}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              <ErrorMessage
                name={q.id_question}
                component="div"
                className="error text-sm text-red-700"
              />
            </div>
          )
      )}
      <div className="container mt-5">
        <Progress value={progress} className="h-2.5 rounded-full w-auto " />
        <p className="text-white text-center mt-2">{currentPage+1}/{pages.length}</p>
      </div>
      <div className="flex justify-evenly text-sm mb-4 mt-5">
      {currentPage !== 0 && (
          <button
            onClick={goToPreviousPage}

            disabled={isPreviousData}
            className={classnames("btn-form", "btn-form-green")}
              type="button"
              data-testid="previous-page-button"
          >
            Atras
          </button>
        )}
        {currentPage !== pages.length - 1 && (
          <button
            onClick={goToNextPage}
            disabled={isPreviousData}
            className={classnames("btn-form", "btn-form-green")}
              type="button"
              data-testid="next-page-button"
          >
            Siguiente
          </button>
        )}
        {currentPage === pages.length - 1 && (
          <button
            disabled={isPreviousData || !formik.isValid}
            className={classnames("btn-form", "btn-form-green")}
              type="submit"
              data-testid="submit-form-button"
          >
            Enviar
          </button>
        )}
      </div>
      {isFetching ? <span>Loading...</span> : null}
      </Form>
    </div>
  );
};
