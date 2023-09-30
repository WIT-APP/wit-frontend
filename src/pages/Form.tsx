/* eslint-disable @typescript-eslint/no-unused-vars */
import classnames from 'classnames';
import { useState } from 'react';
import witLogo from '../assets/witLogo.png';
import { useCategoryQuestion } from '../services/CategoryQuestionsForm';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
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
  //formacion_online: Yup.string().required('La formación online es obligatoria'),
  razones_para_unir: Yup.string().required('Las razones para unir son obligatorias'),
  encontrar_programa: Yup.string().required('Cómo encontraste el programa es obligatorio'),
  
});

// validationSchema.validate(values).catch(errors => {
//   console.log('Validation Errors:', errors);
// });

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
    formacion_online: 'No',
    razones_para_unir: '',
    encontrar_programa: '',
    mas_informacion: '',
  };

  const formik = useFormikContext(); // Access the Formik context

  const isFormValid = (formik: { isValid: any; dirty: any; }) => {
    return formik.isValid && formik.dirty;
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
        ) : question ?(
          <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
          >
            {({ isValid,dirty }) => {
              console.log('isValid:', isValid);
              console.log('dirty:', dirty);
              return(
              <Form>
                {question?.map((q) => (
                  <div className="container" key={q.id_question}>
                    <label htmlFor={q.id_question}>{q.text}</label>
                    {/* TYPE1 */}
                    {q.type === 'text' && (
                      <Field
                        name={q.id_question}
                        type={q.type}
                        id={q.id_question}
                        placeholder={q.placeholder}
                        required={q.obligatory}
                        className='mt-2 form-input w-full rounded-lg shadow appearance-none border focus:ring-yellow2 focus:border-yellow2 text-sm px-3 py-2 overflow-x-auto '
                      />
                    )}
                    {/* TYPE2 */}
                    {q.type === 'textarea' && (
                      <Field
                        name={q.id_question}
                        type='textarea'
                        component = {q.type}
                        id={q.id_question}
                        placeholder={q.placeholder}
                        required={q.obligatory}
                        className='mt-2 form-textarea text-sm w-full px-3 py-2 overflow-x-auto focus:ring-yellow2 focus:border-yellow2 rounded-md shadow appearance-none'
                      />
                    )}
                    {/* TYPE1 */}
                    {q.type ==='date' && (
                      <Field
                        name={q.id_question}
                        type={q.type}
                        id={q.id_question}
                        placeholder={q.placeholder}
                        required={q.obligatory}
                        className='mt-2 form-input w-full rounded-lg shadow appearance-none border focus:ring-yellow2 focus:border-yellow2 text-sm px-3 py-2 overflow-x-auto '
                      />
                    )}
                    {/* TYPE1 */}
                    {q.type ==='email' && (
                      <Field
                        name={q.id_question}
                        type={q.type}
                        id={q.id_question}
                        placeholder={q.placeholder}
                        required={q.obligatory}
                        className='mt-2 form-input w-full rounded-lg shadow appearance-none border focus:ring-yellow2 focus:border-yellow2 text-sm px-3 py-2 overflow-x-auto '
                      />
                    )}
                    {/* TYPE1 */}
                    
                    {q.type ==='phone' && (
                      <Field
                        name={q.id_question}
                        type={q.type}
                        id={q.id_question}
                        placeholder={q.placeholder}
                        required={q.obligatory}
                        className='mt-2 form-input w-full rounded-lg shadow appearance-none border focus:ring-yellow2 focus:border-yellow2 text-sm px-3 py-2 overflow-x-auto '
                      />
                    )}
                    {/* TYPE3 */}
                    {q.type === 'checkbox' && (
                      <div className="flex items-center text-white mt-2 mr-2">
                        {q.options.map((option) => (
                          <label key={option}>
                            <Field
                              type="checkbox"
                              name={q.id_question}
                              value={option}
                              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    )}
                    {/* TYPE4 */}
                    {q.type === 'toggle' && (
                      <div>
                        {q.options.map((option) => (
                          <label key={option} className="relative inline-flex text-white items-center mb-4 cursor-pointer">
                            <Field
                              type="checkbox"
                              name={q.id_question}
                              value={option} // Use the option value as the value of the checkbox
                              className="sr-only peer"                              
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-lightgray2 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow2"></div>
                            <span className="ml-3 text-sm font-medium text-white">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                    {/* TYPE5 */}
                    {q.type === 'select' && (
                      <Field
                        as="select"
                        name={q.id_question}
                        id={q.id_question}
                        required={q.obligatory}
                        className='bg-gray-50 border border-gray-300 text-black2 mb-6 text-sm rounded-lg focus:ring-yellow2 focus:border-yellow2 block w-full p-2.5 '
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
                    {/* TYPE4 */}
                    {q.type === 'radio' && (
                      <div className="flex flex-column items-center text-white mb-2 mr-2">
                        {q.options.map((option) => (
                          <div key={option}>
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
                    disabled={!isValid || !dirty || isPreviousData || currentPage === pages.length - 1}
                    className={classnames('btn-form', 'btn-form-green', {
                      invisible: currentPage === pages.length - 1,
                    })}
                    type="submit"
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
            )}}
          </Formik>
        ) : null}
      </div>
    </div>
  );
};