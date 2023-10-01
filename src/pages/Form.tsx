/* eslint-disable @typescript-eslint/no-unused-vars */
import classnames from 'classnames';
import { useState } from 'react';
import witLogo from '../assets/witLogo.png';
import { useCategoryQuestion } from '../services/CategoryQuestionsForm';
import { Formik, Form, Field, ErrorMessage, useFormikContext, FormikTouched } from 'formik';
import { FormValues, validationSchema } from '@/interfaces/formRegister.interface';
import { FormSection } from '@/components/FormSection';

const pages = ['Personal', 'Sociodemografica', 'Academica', 'Formacion'];

export const Form2 = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage:number) => {
    setCurrentPage(newPage);
  };


  const { isLoading, isError, error, isFetching, isPreviousData, question } =
    useCategoryQuestion(pages[currentPage]);


  const initialValues: FormValues = {
    nombre: '',
    apellidos: '',
    correo_electronico: '',
    telefono: '',
    genero: '',
    fecha_de_nacimiento:'',
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
            <FormSection
              isFetching={isFetching}
              isPreviousData={isPreviousData}
              question={question}
              currentPage={currentPage} 
              onPageChange={handlePageChange} 
            />
          </Formik>
        ) : null}
      </div>
    </div>
  );
};