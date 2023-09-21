import { ChangeEvent } from "react";

interface InputSelectProps {
  id: string;
  label: string;
  options: string[];
  value: string; // Agregar la prop value para indicar la opción seleccionada
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
export const InputSelect= ({ id, label, options, value, onChange }: InputSelectProps) => {
  return (
    <div className="mb-4 mt-4">
      <label htmlFor={id} className="block font-medium text-gray-700 mb-3">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value} // Utiliza la prop value para establecer la opción seleccionada
        onChange={onChange}
        className="font-normal w-full px-3 py-2 text-justify mb-2 mr-2"
      >
        <option value="" disabled hidden>
          Selecciona una opción
        </option>
        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}