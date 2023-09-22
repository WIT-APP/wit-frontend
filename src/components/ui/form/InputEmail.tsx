import { ChangeEventHandler, useState } from "react";
import {InputText} from "./InputText";


interface inputEmailProps {
  id: string;
  type: string;
  placeholder?: string;
  children: React.ReactNode;
  value?: string;
  expandText: string;
  additionalClass?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const InputEmail = (
  {
    id,
    type,
    placeholder,
    children,
    value,
    expandText,
    additionalClass,
    onChange,
  }: inputEmailProps
) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (inputValue: string) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (emailPattern.test(inputValue)) {
      setIsValid(true);
      setErrorMessage("");
      onChange?.(inputValue);
    } else if (inputValue === "") {
      setIsValid(true);
      setErrorMessage("");
      onChange?.("");
    } else {
      setIsValid(false);
      setErrorMessage("Por favor, ingresa un número de teléfono válido.");
      return errorMessage;
    } 
    
  };

  additionalClass = `pl-10${!isValid ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400' : ''}`
  return (
    
    <div>
        <div className="relative">
          <div className="absolute inset-y-12 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-yellow2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
          </div>
          <InputText 
          type={type}
          id={id}
          value={value}
          placeholder={placeholder} 
          children={children} 
          expandText={expandText} 
          additionalClass={` ${additionalClass}`}
          onInputChange={handleInputChange}
          />
        </div>
        {!isValid && (
        <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
      )}
      </div>
   
  );
};

export default InputEmail;

   
