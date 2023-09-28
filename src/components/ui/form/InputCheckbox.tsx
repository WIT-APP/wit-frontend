import { useState } from "react";

interface CheckboxGroupProps {
  label: string;
  options: string[];
  selectedValues: string[];
  expandText: string;
  id:string
  value:string;
}

export const InputCheckbox = ({
  options,
  expandText,
  label,
  id,
}: CheckboxGroupProps) => {

  const [selectedValues, setSelectedValues] = useState(['']); // Corrected

  const handleCheckboxChange = (value: string) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item:string) => item !== value)
      : [...selectedValues, value];

    setSelectedValues(updatedValues); // Corrected

    console.log('updatedValues:', updatedValues);

  };


  return (
    <div className="mt-5">
      <label className="block font-bold text-white mb-3" id={id}>
        {label}
        <br />
        <span className="opacity-70 text-white font-normal text-justify">
          {expandText}
        </span>
      </label>
      {options.map((option) => (
        <div key={option} className="flex items-center text-white mt-2 mr-2">
          <input
            type="checkbox"
            value={selectedValues}
            checked={selectedValues.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          {option}
        </div>
      ))}
    </div>
  );
};
