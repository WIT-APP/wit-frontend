/* eslint-disable @typescript-eslint/no-unused-vars */
import classnames from 'classnames';
import { useState } from 'react';
import witLogo from '../assets/witLogo.png';
import { useCategoryQuestion } from '../services/CategoryQuestionsForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const pages = ['Personal', 'Sociodemografica', 'Academica', 'Formacion'];

const validationSchema = Yup.object().shape({
  nombre: Yup.string().required('El nombre es obligatorio'),
  apellidos: Yup.string().required('Los apellidos son obligatorios'),
  correo_electronico: Yup.string().email('Formato de correo electrónico inválido').required('El correo electrónico es obligatorio'),
  telefono: Yup.string().required('El teléfono es obligatorio'),
  genero: Yup.string().required('El género es obligatorio'),
  numero_documento_id: Yup.string().required('El número de documento es obligatorio'),
  documento_de_identidad: Yup.string().required('El documento de identidad es obligatorio'),
  direccion: Yup.string().required('La dirección es obligatoria'),
  ciudad: Yup.string().required('La ciudad es obligatoria'),
  provincia: Yup.string().required('La provincia es obligatoria'),
  pais_de_residencia: Yup.string().required('El país de residencia es obligatorio'),
  codigo_postal: Yup.string().required('El código postal es obligatorio'),
  programa_cursar: Yup.string().required('El programa a cursar es obligatorio'),
  colectivo: Yup.string().required('El colectivo es obligatorio'),
  educacion: Yup.string().required('La educación es obligatoria'),
  estudio_mas_alto: Yup.string().required('El estudio más alto es obligatorio'),
  situacion_profesional: Yup.string().required('La situación profesional es obligatoria'),
  intereses_actuales: Yup.string().required('Los intereses actuales son obligatorios'),
  dedicacion_semanal: Yup.string().required('La dedicación semanal es obligatoria'),
  acceso_internet_dispositivos: Yup.string().required('El acceso a internet y dispositivos es obligatorio'),
  formacion_online: Yup.string().required('La formación online es obligatoria'),
  razones_para_unir: Yup.string().required('Las razones para unir son obligatorias'),
  encontrar_programa: Yup.string().required('Cómo encontraste el programa es obligatorio'),
});

export interface FormValues {
  [key: string]: string;
}

export const Form2 = () => {
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

  const initialValues: FormValues = {
    nombre: '',
    apellidos: '',
    correo_electronico: '',
    telefono: '',
    genero: '',
    numero_documento_id: '',
    documento_de_identidad: '',
    tipo_documento_identidad: '',
    permiso: '',
    direccion: '',
    ciudad: '',
    provincia: '',
    pais_de_residencia: '',
    codigo_postal: '',
    programa_cursar: '',
    colectivo: '',
    educacion: '',
    estudio_mas_alto: '',
    situacion_profesional: '',
    intereses_actuales: '',
    dedicacion_semanal: '',
    acceso_internet_dispositivos: '',
    formacion_online: '',
    razones_para_unir: '',
    encontrar_programa: '',
    mas_informacion: '',
  };

  return (
    <div className="overflow-hidden flex md:justify-center md:bg-black-transparent md:bg-[url('/background.jpg')] bg-cover bg-no-repeat bg-left bg-fixed md:mb-8 lg:mb-14 lg:mt-0 max-h-screen">
      <div className="w-full container md:w-129 p-4 mx-auto md:mx-12 md:my-14 bg-purpleblue2 rounded bg-gray2 overflow-y-scroll scrollbar-thumb-base">
        <div className="m-2 flex -mb-7">
          <img src={witLogo} alt="" />
          <h2 className="text-yellow2 text-xl font-bold mt-6 ml-1">Sección {pages[currentPage]}</h2>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error?.message}</div>
        ) : (
          <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
          >
            {({ values }) => (
              <Form>
                {question?.map((q) => (
                  <div className="container" key={q.id_question}>
                    <label htmlFor={q.id_question}>{q.text}</label>
                    {q.type === 'text' && (
                      <Field
                        name={q.id_question}
                        type={q.type}
                        id={q.id_question}
                        placeholder={q.placeholder}
                        required={q.obligatory}
                      />
                    )}
                    {q.type === 'textarea' && (
                      <Field
                        name={q.id_question}
                        type='textarea'
                        id={q.id_question}
                        placeholder={q.placeholder}
                        required={q.obligatory}
                      />
                    )}
                    {q.type ==='date' && (
                      <Field
                        name={q.id_question}
                        type={q.type}
                        id={q.id_question}
                        placeholder={q.placeholder}
                        required={q.obligatory}
                      />
                    )}
                    {q.type ==='email' && (
                      <Field
                        name={q.id_question}
                        type={q.type}
                        id={q.id_question}
                        placeholder={q.placeholder}
                        required={q.obligatory}
                      />
                    )}
                    {q.type ==='phone' && (
                      <Field
                        name={q.id_question}
                        type={q.type}
                        id={q.id_question}
                        placeholder={q.placeholder}
                        required={q.obligatory}
                      />
                    )}
                    {q.type === 'checkbox' && (
                      <div>
                        {q.options.map((option) => (
                          <label key={option}>
                            <Field
                              type="checkbox"
                              name={q.id_question}
                              value={option}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    )}
                    {q.type === 'toggle' && (
                      <div>
                        {q.options.map((option) => (
                          <label key={option}>
                            <Field
                              type="radio"
                              name={q.id_question}
                              value={option}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    )}
                    {q.type === 'select' && (
                      <Field
                        as="select"
                        name={q.id_question}
                        id={q.id_question}
                        required={q.obligatory}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {q.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    )}
                    {q.type === 'radio' && (
                      <div>
                        {q.options.map((option) => (
                          <div key={option}>
                            <label>
                              <Field
                                type="radio"
                                name={q.id_question}
                                value={option}
                                required={q.obligatory}
                              />
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                    <ErrorMessage name={q.id_question} component="div" className="error" />
                  </div>
                ))}
                <div className="flex justify-evenly text-sm mb-4">
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
                    disabled={isPreviousData || currentPage === pages.length - 1}
                    className={classnames('btn-form', 'btn-form-green', {
                      invisible: currentPage === pages.length - 1,
                    })}
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
                {isFetching ? <span>Loading...</span> : null}{' '}
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};