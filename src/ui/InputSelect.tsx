import { ChangeEvent } from "react";
interface Option {
  label: string;
  value: string;
}
interface InputSelectProps {
  id: string;
  label: string;
  value: string;
  options: Option[];
  onChange: (event: ChangeEvent<HTMLSelectElement> ) => void;
}

function InputSelect({
  id,
  label,
  value,
  options,
  onChange,
}: InputSelectProps) {
  
  return (
    <>
      <label htmlFor={id}  className="block font-medium text-gray-700 mb-2">{label}</label>
      <select id={id} name={id} value={value} onChange={onChange}>
        <option value="" disabled selected hidden >
          Selecciona una opción
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default InputSelect;
