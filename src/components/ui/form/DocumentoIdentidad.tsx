import { useEffect, useState } from "react";
import { Field } from 'formik';
import { Question } from "@/interfaces/question.interface";

// interface DocumentoIdentidadProps {
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   value: string;
// }

export const DocumentoIdentidad = ({ question }: { question: Question[] }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [permisoValue, setPermisoValue] = useState('');

  const handleRadioChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handlePermisoChange = (event: any) => {
    setPermisoValue(event.target.value);
  };
  const handleTipohange = (event: any) => {
    setTipoDocumento(event.target.value);
  };

  const filteredQuestions = question.filter((q) => {
    if (selectedOption === 'Otro' && q.type === 'otro') {
      return true;
    }
    if ((selectedOption === 'NIE' || selectedOption === 'Otro') && q.type === 'permiso') {
      return true;
    }
    if (selectedOption !== 'Otro' && selectedOption !== 'NIE' && q.type === 'documento') {
      return true;
    }
    return false;
  });

  return (
    <div className="mt-5" data-testid="documento-identidad">
      {filteredQuestions.map((q) => (
        <div key={q.id_question}>
          {q.type === 'documento' && (
            <div>
              {q.options.map((option) => (
                <div key={option}>
                  <label>
                    <Field
                      type="radio"
                      name={q.id_question}
                      value={option}
                      required={q.obligatory}
                      onChange={handleRadioChange}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
          {selectedOption === 'Otro' && q.type === 'otro' && (
            <>
              <label htmlFor={q.id_question}>{q.text}</label>
              <Field
                name={q.id_question}
                type='text'
                id={q.id_question}
                placeholder={q.placeholder}
                required={q.obligatory}
                onChange={handleTipohange}
              />
            </>
          )}

          {(selectedOption === 'NIE' || selectedOption === 'Otro') && q.type === 'permiso' && (
            <>
              <Field
                as="select"
                name={q.id_question}
                id={q.id_question}
                required={q.obligatory}
                onChange={handlePermisoChange}
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
            </>
          )}
        </div>
      ))}
    </div>
  );
};