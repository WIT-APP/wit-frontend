import { ChangeEvent } from "react";
interface Option {
  label: string;
  value: string;
}
interface InputSelectProps {
  id: string;
  label: string;
  options: Option[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function InputSelect({ id, label, options, onChange }: InputSelectProps) {
  return (
    <div className="mb-4 ">
      <label htmlFor={id} className="block font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        id={id}
        name={id}
        onChange={onChange}
        className="font-normal w-full px-3 py-2 rounded-radius-050 text-justify"
      >
        <option value="" disabled selected hidden>
          Selecciona una opción
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
