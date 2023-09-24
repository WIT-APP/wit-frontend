import classnames from 'classnames';
import { useState } from "react";
import { FormSection } from "../components/FormSection";
import witLogo from "../assets/witLogo.png";
import { useCategoryQuestion } from "../services/CategoryQuestionsForm";
import { useFormik, Formik, Form, Field } from 'formik';

const pages = ["Personal", "Sociodemografica", "Academica", "Formacion"];

export interface FormValues {
  [key: string]: string ; 
}

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

  //remove after apply formik
  const onSubmit = () => {};

  const formik = useFormik<FormValues>({
    initialValues: {
      nombre: '',
      apellidos:'',
      correo_electronico:'',
      telefono:'',
      genero:'',
      numero_documento_id:'',
      documento_de_identidad:'',
      tipo_documento_identidad:'',
      permiso:'',
      direccion:'',
      ciudad:'',
      provincia:'',
      pais_de_residencia:'',
      codigo_postal:'',
      programa_cursar:'',
      colectivo:'',
      educacion:'',
      estudio_mas_alto:'',
      situacion_profesional:'',
      intereses_actuales:'',
      dedicacion_semanal:'',
      acceso_internet_dispositivos:'',
      formacion_online:'',
      razones_para_unir:'',
      encontrar_programa:'',
      mas_informacion:'',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

 
  return (
    <div className=" overflow-hidden flex md:justify-center md:bg-black-transparent md:bg-[url('/background.jpg')] bg-cover bg-no-repeat bg-left bg-fixed md:mb-8 lg:mb-14 lg:mt-0 max-h-screen">
      <form className="w-full container md:w-129 p-4 mx-auto md:mx-12 md:my-14 bg-purpleblue2 rounded bg-gray2 overflow-y-scroll scrollbar-thumb-base"
      onSubmit={formik.handleSubmit}
      >
        <div className="m-2 flex -mb-7">
          <img src={witLogo} alt="" />
          <h2 className="text-yellow2 text-xl font-bold mt-6 ml-1">
            Sección {pages[currentPage]}
          </h2>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error?.message}</div>
        ) : (
          <FormSection 
          data={question} 
          values={formik.values}
          onChange={formik.handleChange}
          />
        )}
        
        <div className="flex justify-evenly text-sm mb-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            className={classnames('btn-form', 'btn-form-green', {
              invisible: currentPage === 0,
            })}
          >
            Previous Page
          </button>{" "}
          <button
            onClick={goToNextPage}
            disabled={isPreviousData || currentPage === pages.length - 1}
            className={classnames('btn-form', 'btn-form-green', {
              invisible: currentPage === pages.length - 1,
            })}
          >
            Next Page
          </button>
          <button
            onClick={onSubmit}
            disabled={currentPage !== pages.length - 1}
            className={classnames('btn-form', 'btn-form-green', {
              invisible: currentPage !== pages.length - 1,
            })}
            type="submit"
          >
            Enviar
          </button>
        </div>
        {isFetching ? <span> Loading...</span> : null}{" "}
      </form>
    </div>
  );
};
