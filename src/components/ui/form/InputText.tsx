/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, ChangeEventHandler } from "react";

interface inputTextProps {
  id: string;
  type: string;
  placeholder?: string;
  children: React.ReactNode;
  value?: string;
  expandText: string;
  additionalClass?: string
  required?: boolean;
  onInputChange?: (value: string) => void;
}

export const InputText = ({
  id,
  type,
  placeholder,
  children,
  value,
  expandText,
  additionalClass,
  required,
  onInputChange,
}: inputTextProps) => {

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onInputChange?.(newValue); // Call the onChange callback with the new value
    
    console.log(newValue)
  };
  return (
    <div className="mt-5">
      <label htmlFor={id} className="block text-white font-bold mb-2">
        {children} <br />
        <span className="opacity-70 text-justify mt-2">
          {expandText}
        </span>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          required={required}
          className={`mt-2 form-input text-sm text-black2 block w-full focus:ring-yellow2 focus:border-yellow2 px-3 py-2 rounded-md overflow-x-auto  p-2.5 ${additionalClass} placeholder-gray-400`}
        />
      </label>
    </div>
  );
};


