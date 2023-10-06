/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateApplicant } from '../interfaces/applicant.interface';
import { useState } from 'react';
import witLogo from '../assets/witLogo.png';
import { useCategoryQuestion } from '../services/CategoryQuestionsForm';
import { Formik,FormikHelpers } from 'formik';
import { initialValues, validationSchema } from '@/interfaces/formRegister.interface';
import { FormSection } from '@/components/FormSection';
import {  useNewApplication } from '@/services/RegisterApplicant';
import { ToastContainer } from 'react-toastify';
import { useRef } from "react";

const pages = ['Personal', 'Sociodemografica', 'Academica', 'Formacion'];

export const FormPage = () => {

  const newPost = useNewApplication()
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage:number) => {
    setCurrentPage(newPage);
  };

    
  const formContainerRef = useRef<HTMLDivElement | null>(null)

  const handleSubmit = async (values: CreateApplicant, { resetForm }: FormikHelpers<CreateApplicant>) => {
    
    try {
      const response = await newPost.mutateAsync(values);
      resetForm()
      setTimeout(() => {
        window.location.reload();
      }, 3500);
     return response
    } catch (error) {
      return error
    }

  }

  const { isLoading, isError, error, isFetching, isPreviousData, question } =
    useCategoryQuestion(pages[currentPage]);

    const scrollTop = ()=>{
      if(formContainerRef.current){
        formContainerRef.current.scrollTop=0;
      } 
    }

  return (
    <div className="overflow-hidden flex md:justify-center md:bg-black-transparent md:bg-[url('/background.jpg')] bg-cover bg-no-repeat bg-left bg-fixed md:mb-8 lg:mb-14 lg:mt-0 max-h-screen">
      <div ref={formContainerRef} className="w-full container md:w-129 md:p-4 mx-auto md:mx-12 md:my-14 bg-purpleblue2 rounded bg-gray2 overflow-y-scroll scrollbar-thumb-base pb-16 pt-10">
        <div className="m-2 flex -mb-7">
          <img src={witLogo} alt="" />
          <h2 className="text-yellow2 text-xl font-bold mt-6 mb-3 ml-1">Sección {pages[currentPage]}</h2>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error?.message}</div>
        ) : question ?(
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          > 
            <FormSection
              isFetching={isFetching}
              isPreviousData={isPreviousData}
              question={question}
              currentPage={currentPage} 
              onPageChange={handlePageChange} 
              data-testid="form-section-component"
              scrollTop={scrollTop}
            />
          </Formik>
        ) : null}
      </div>
      <ToastContainer />
    </div>
  );
};

