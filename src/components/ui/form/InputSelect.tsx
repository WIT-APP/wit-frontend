//import { ChangeEvent, useEffect, useState } from "react";

interface InputSelectProps {
  id: string;
  label: string;
  options: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export const InputSelect = ({
  id,
  label,
  //value,
  options,
  onChange,
}: InputSelectProps) => {

  //const [selectedValue, setSelectedValue] = useState(value);

  // useEffect(() => {
  //   setSelectedValue(value);
  // }, [value]);

  // const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   const selectedValue = event.target.value;
  //   setSelectedValue(selectedValue);
  //   onChange?(selectedValue);
  //   console.log(selectedValue);
  // };

  return  (
    <div className="mt-5">
      <label htmlFor={id} className="block font-bold text-white mb-2">
        {label}
      </label>
      <select
        id={id}
        name={id}
        //value={selectedValue}
        onChange={onChange}
        className="font-normal text-sm w-full px-3 text-justify mb-2 mr-2 rounded-md focus:ring-yellow2 focus:border-yellow2 block p-2.5 placeholder-gray-400 text-black2"
      >
        <option value="" disabled selected hidden>
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