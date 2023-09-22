import { ChangeEventHandler } from "react";

interface inputTextProps {
  id: string;
  type: string;
  placeholder?: string;
  children: React.ReactNode;
  value?: string;
  expandText: string;
  additionalClass?: string
  required?: boolean;
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

}: inputTextProps) => {

  const handleInputChange: ChangeEventHandler<HTMLInputElement>=() => {}
  return (
    <div className="mt-2">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">
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
          className={`mt-2 form-input text-sm text-gray-400 block w-full focus:ring-blue-500 focus:border-blue-500 px-3 py-2 rounded-md overflow-x-auto  p-2.5 ${additionalClass} placeholder-gray-400`}
        />
      </label>
    </div>
  );
};


