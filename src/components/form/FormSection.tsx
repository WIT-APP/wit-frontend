import InputText from '../ui/InputText'
// import { useCategoryQuestion } from '../../services/CategoryQuestionsForm';
import InputEmail from '../ui/InputEmail';
import InputSelect from '../ui/InputSelect';
import { InputCheckbox } from '../ui/InputCheckbox';
import { Question } from '../../interfaces/question.interface';


interface PersonalInfoProps {
    data:Question[] | undefined; 
}


export const FormSection = (question : PersonalInfoProps) => {

    const handleSelect = () => {};
    const handleCheckbox = () => {}; 

    return (
        <>
        <div>
          {question.data?.map((q) => {
            if (q.type === 'text') {
              return (
                <InputText
                  key={q.id}
                  id={q.id_question}
                  type={q.type}
                  expandText={q.expandText}
                  children={q.text}
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
            }
            return null; // Handle other types or return null if needed
          })}
          
        </div>
        
        </>
      );
    };





