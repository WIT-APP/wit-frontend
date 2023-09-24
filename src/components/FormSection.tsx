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



interface PersonalInfoProps {
    data:Question[] | undefined;
    values: FormValues; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}


export const FormSection = (
  { data, values, onChange }: PersonalInfoProps 
  ) => {

    
    return (
        <>
        <div className='w-100 rounded p-8 text-sm m-0'>
          {data?.map((q) => {
            if (q.type === 'text') {
              const questionValue = values[q?.id_question]
              return (
                <InputText
                  key={q.id}
                  id={q.id_question}
                  type={q.type}
                  expandText={q.expandText}
                  children={q.text}
                  placeholder={q.placeholder}
                  required={q.obligatory}
                  value={questionValue}
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
                  value={''}   
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
                />
              );
            } else if (q.type === 'checkbox') {
              //const questionValue = values[q.id_question]
              return (
                <InputCheckbox
                  key={q.id}
                  label={q.text}
                  options={q.options}
                  id={q.id_question}
                  //selectedValues={questionValue}
                  selectedValues={[]}
                  onChange={onChange}
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
                  //value={questionValue}              
                  />
              );
            } else if (q.type === 'radio') {
              //const questionValue = values[q.id_question]
              return (
                <InputRadioBox 
                  key={q.id}
                  label={q.text}
                  options={q.options}
                  id={q.id_question}
                  //selectedValue={questionValue}
                  expandText={q.expandText} 
                  onChange={onChange}
                  selectedValue={''}              
                />
              );
            }else if (q.type === 'document') {
              //const questionValue = values[q.id_question]
              return (
                <DocumentoIdentidad
                  key={q.id}
                  onChange={onChange}                />
              );
            }

            return null; 
          })}
          
        </div>
        
        </>
      );
    };





