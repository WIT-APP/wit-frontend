/* eslint-disable @typescript-eslint/no-unused-vars */
import InputText from './ui/InputText'
// import { useCategoryQuestion } from '../../services/CategoryQuestionsForm';
import InputEmail from './ui/InputEmail';
import {InputSelect} from './ui/InputSelect';
import { InputCheckbox } from './ui/InputCheckbox';
import { Question } from '../interfaces/question.interface';
import InputTextarea from './ui/InputTextarea';
import { DocumentoIdentidad } from './ui/DocumentoIdentidad';
import { InputRadioBox } from './ui/InputRadioBox';
import { InputPhoneNumber } from './ui/InputPhoneNumber';


interface PersonalInfoProps {
    data:Question[] | undefined; 
}


export const FormSection = (question : PersonalInfoProps) => {

    const handleSelect = () => {};
    const handleCheckbox = () => {}; 

    return (
        <>
        <div className='w-100 rounded p-8 text-sm'>
          {question.data?.map((q) => {
            if (q.type === 'text') {
              return (
                <InputText
                  key={q.id}
                  id={q.id_question}
                  type={q.type}
                  expandText={q.expandText}
                  children={q.text}
                  placeholder={q.placeholder}
                />
              );
            } else if (q.type === 'email') {
              return (
                <InputEmail
                  key={q.id}
                  placeholder={q.placeholder}
                  children={q.text}
                />
              );
            } else if (q.type === 'select') {
              return (
                <InputSelect
                  key={q.id}
                  id={q.id_question}
                  label={q.text}
                  options={q.options}
                  onChange={handleSelect} 
                  value={''}    
                />
              );
            } else if (q.type === 'date') {
              return (
                <InputText
                  key={q.id}
                  id={q.id_question}
                  type={q.type}
                  expandText={q.expandText}
                  children={q.text}
                />
              );
            } else if (q.type === 'checkbox') {
              return (
                <InputCheckbox
                  key={q.id}
                  label={q.text}
                  options={q.options}
                  selectedValues={[]}
                  onChange={handleCheckbox}
                  expandText={q.expandText}
                />
              );
            }else if (q.type === 'textarea') {
              return (
                <InputTextarea
                  key={q.id}
                  children={q.text}
                  expandText={q.expandText} 
                  id={q.id_question}                />
              );
            }else if (q.type === 'phone') {
              return (
                <InputPhoneNumber
                  key={q.id}
                  children={q.text}
                  expandText={q.expandText}
                  id={q.id_question} 
                  type={q.type}                />
              );
            } else if (q.type === 'radio') {
              return (
                <InputRadioBox 
                key={q.id}
                label={q.text} 
                options={q.options} 
                selectedValue={''} 
                onChange={function (selectedValue: string): void {
                  throw new Error('Function not implemented.');
                } } 
                expandText={q.expandText}/>
              );
            }else if (q.type === 'document') {
              return (
                <DocumentoIdentidad
                  key={q.id}
                  onSelectedOptionChange={function (value: string): void {
                    throw new Error('Function not implemented.');
                  } } 
                  onTipoDocumentoChange={function (value: string): void {
                    throw new Error('Function not implemented.');
                  } } 
                  onPermisoValueChange={function (value: string): void {
                    throw new Error('Function not implemented.');
                  } }   
                />
              );
            }

            return null; 
          })}
          
        </div>
        
        </>
      );
    };





