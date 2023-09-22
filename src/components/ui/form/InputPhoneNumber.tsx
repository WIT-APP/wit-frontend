/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import InputText from "./InputText";

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
    const [isValid, setIsValid] = useState(true); // Estado para rastrear la validez
    const [errorMessage, setErrorMessage] = useState(""); // Mensaje de error

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const mobileNumberPattern = /^[0-9]{9}$/;

    if (mobileNumberPattern.test(inputValue)) {
      setIsValid(true); // El valor es válido
      setErrorMessage(""); // Borra el mensaje de error
      onChange?.(inputValue);
    } else if (inputValue === "") {
      setIsValid(true); // El valor está vacío (permitido)
      setErrorMessage(""); // Borra el mensaje de error
      onChange?.("");
    } else {
      setIsValid(false); // El valor no cumple el patrón
      setErrorMessage("Por favor, ingresa un número de teléfono válido.");
      return errorMessage;
    }
    }
 

  return (
    <div className="mt-2">
      <InputText
        type={type} 
        id={id}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        children={children}
        expandText={expandText}
      />
      {!isValid && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};