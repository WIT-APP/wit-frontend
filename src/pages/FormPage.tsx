/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateApplicant } from '../interfaces/applicant.interface';
import { useState } from 'react';
import witLogo from '../assets/witLogo.png';
import { useCategoryQuestion } from '../services/CategoryQuestionsForm';
import { Formik,} from 'formik';
import { initialValues, validationSchema } from '@/interfaces/formRegister.interface';
import { FormSection } from '@/components/FormSection';
import { useNewApplication } from '@/services/RegisterApplicant';

const pages = ['Personal', 'Sociodemografica', 'Academica', 'Formacion'];

export const FormPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage:number) => {
    setCurrentPage(newPage);
  };

  const newPost = useNewApplication()

  const handleSubmit = async (values: CreateApplicant) => {
    console.log(values);
    
    try {
      const response = await newPost.mutateAsync(values);
      console.log('API response:', response);
    } catch (error) {
      console.error('Error making API request:', error);
    }
  }

  const { isLoading, isError, error, isFetching, isPreviousData, question } =
    useCategoryQuestion(pages[currentPage]);

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
            onSubmit={handleSubmit}
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