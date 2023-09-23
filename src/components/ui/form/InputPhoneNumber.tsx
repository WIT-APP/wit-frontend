import React, { useState } from "react";
import { InputText } from "./InputText";

interface InputPhoneNumberProps {
  id: string;
  type: string;
  placeholder?: string;
  children: React.ReactNode;
  value?: string;
  expandText: string;
  onChange?: (value: string) => void;
}

export const InputPhoneNumber: React.FC<InputPhoneNumberProps> = ({
  id,
  type,
  placeholder,
  children,
  value,
  expandText,
  onChange,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (inputValue: string) => {
    const mobileNumberPattern = /^[0-9]{9}$/;

    if (mobileNumberPattern.test(inputValue)) {
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

  return (
    <div className="mt-5">
      <InputText
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        children={children}
        expandText={expandText}
        onInputChange={handleInputChange} // Pass the callback function
        additionalClass={!isValid ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400' : ''}
      />
      {!isValid && (
        <p className="text-red-800 font-bold text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};