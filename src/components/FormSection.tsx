import {InputText} from './ui/form/InputText'
import InputEmail from './ui/form/InputEmail';
import {InputSelect} from './ui/form/InputSelect';
import { InputCheckbox } from './ui/form/InputCheckbox';
import { Question } from '../interfaces/question.interface';
import InputTextarea from './ui/form/InputTextarea';
import { DocumentoIdentidad } from './ui/form/DocumentoIdentidad';
import { InputRadioBox } from './ui/form/InputRadioBox';
import { InputPhoneNumber } from './ui/form/InputPhoneNumber';
import { FormValues } from '@/pages/FormPage';
import { InputToggle } from './ui/form/InputToggle';
//import { useState } from 'react';



interface PersonalInfoProps {
    data:Question[] | undefined;
    values: FormValues; 
<<<<<<< HEAD
    onChange: (e: React.ChangeEvent<HTMLElement> | string) => void;
=======
    onChange: (e: React.ChangeEvent<HTMLElement>) => void;
    colectivo: string[]; // Receive colectivo as a prop
    setColectivo: (colectivo: string[]) => void;
>>>>>>> a3bc1790a2212976a7349fcdf92a44ddd9a0f648

}


export const FormSection = (
  { data, 
    //values,
    colectivo, // Receive colectivo from props
   // setColectivo, // Receive the setter function from props 
    onChange }: PersonalInfoProps 
  ) => {
    // const [selectedValues, setSelectedValues] = useState<string[]>([]);
    
    // const handleCheckboxChange = (option: string) => {
    //   setSelectedValues((prevSelectedValues) => {
    //     if (prevSelectedValues.includes(option)) {
    //       return prevSelectedValues.filter((value) => value !== option);
    //     } else {
    //       return [...prevSelectedValues, option];
    //     }
    //   });
    // };

    

    // const validateField = (fieldName, fieldValue) => {
    //   const errors = {};
  
    //   if (fieldName === 'nombre' && !fieldValue) {
    //     errors[fieldName] = 'Required';
    //   }
      
    //   if (fieldName === 'apellidos' && !fieldValue) {
    //     errors[fieldName] = 'Required';
    //   }
  
    //   // Add validations for other fields as needed
  
    //   return errors;
    // };
  
    // const handleFieldChange = (fieldName, fieldValue) => {
    //   // Validate the field
    //   const fieldErrors = validateField(fieldName, fieldValue);
  
    //   // Update the form values and errors
    //   const newValues = { ...values, [fieldName]: fieldValue };
    //   const newErrors = { ...formik.errors, ...fieldErrors };
  
    //   // Update the form state
    //   formik.setValues(newValues);
    //   formik.setErrors(newErrors);
    // };

    
     const handleText = () => {}

    return (
        <>
        <div className='w-100 rounded p-8 text-sm m-0'>
          {data?.map((q) => {
            if (q.type === 'text') {
              //const questionValue = values[q?.id_question]
              return (
                <InputText
                  key={q.id}
                  id={q.id_question}
                  type={q.type}
                  expandText={q.expandText}
                  children={q.text}
                  placeholder={q.placeholder}
                  required={q.obligatory}
                  //value={questionValue}
                  onChange={onChange}
                />
              );
            } else if (q.type === 'email') {
                //const questionValue = values[q.id_question]
              return (
                <InputEmail
                  key={q.id}
                  placeholder={q.placeholder}
                  children={q.text} 
                  id={q.id_question} 
                  type={q.type} 
                  expandText={q.expandText}
                  onChange={onChange}
                  required={q.obligatory}
                  />
              );
            } else if (q.type === 'select') {
              //const questionValue = values[q.id_question]
              return (
                <InputSelect
                  key={q.id}
                  id={q.id_question}
                  label={q.text}
                  options={q.options}
                  onChange={onChange} 
<<<<<<< HEAD
                  value={questionValue}
                  required={q.obligatory}   
=======
                  value={''}
                  //value={questionValue}   
>>>>>>> a3bc1790a2212976a7349fcdf92a44ddd9a0f648
                />
              );
            } else if (q.type === 'date') {
              //const questionValue = values[q.id_question]
              return (
                <InputText
                  key={q.id}
                  id={q.id_question}
                  type={q.type}
                  expandText={q.expandText}
                  children={q.text}
                  onChange={onChange}
                  required={q.obligatory}
                />
              );
            } else if (q.type === 'checkbox') {
              // Falta capturar respuesta
              const questionValue = values[q.id_question]
              return (
                <InputCheckbox
                  key={q.id}
                  label={q.text}
                  options={q.options}
                  id={q.id_question}
<<<<<<< HEAD
                  value={questionValue}
                  selectedValues={[]}
                  onChange={handleText}
=======
                  selectedValues={colectivo} // Use the colectivo prop
                  //onChange={(selectedValues) => setColectivo(selectedValues)} // Update colectivo in the parent component
                  onChange={onChange}
>>>>>>> a3bc1790a2212976a7349fcdf92a44ddd9a0f648
                  expandText={q.expandText}
                />
              );
            }else if (q.type === 'textarea') {
              //const questionValue = values[q.id_question]
              return (
                <InputTextarea
                  key={q.id}
                  children={q.text}
                  expandText={q.expandText} 
                  id={q.id_question} 
                 //value={questionValue}
                  onChange={onChange}
                  required={q.obligatory}
                />
              );
            }else if (q.type === 'phone') {
              //const questionValue = values[q.id_question]
              return (
                <InputPhoneNumber
                  key={q.id}
                  children={q.text}
                  expandText={q.expandText}
                  id={q.id_question} 
                  type={q.type}
                  onChange={onChange}
<<<<<<< HEAD
                  value={questionValue}
                  required={q.obligatory}               
=======
                  //value={questionValue}              
>>>>>>> a3bc1790a2212976a7349fcdf92a44ddd9a0f648
                  />
              );
            } else if (q.type === 'radio') {
              return (
                <InputRadioBox 
                  key={q.id}
                  label={q.text}
                  options={q.options}
                  id={q.id_question}
                  selectedValue={values[q.id_question]} 
                  expandText={q.expandText} 
                  onChange={onChange}  
                  required={q.obligatory}       
                />
              );
            }else if (q.type === 'document') {
             // const questionValue = values[q.id_question]
              // Falta capturar respuesta
              return (
                <DocumentoIdentidad
                  key={q.id}
                  onChange={onChange} 
                  value={'questionValue'}              />
              );
            }else if (q.type === 'toggle') {
             //const questionValue = values[q.id_question]
             // Falta capturar respuesta
              return (
                <InputToggle
                  key={q.id}
                  onChange={onChange} 
                  id={q.id_question} 
                  children={q.text}
<<<<<<< HEAD
                  value={questionValue}
                  required={q.obligatory} 
=======
                  //value={questionValue} 
>>>>>>> a3bc1790a2212976a7349fcdf92a44ddd9a0f648
                />
              );
            }

            return null; 
          })}
          
        </div>
        
        </>
      );
    };





