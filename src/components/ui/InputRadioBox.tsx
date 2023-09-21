import React from "react";

interface RadioBoxGroupProps {
  label: string;
  options: string[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
  expandText: string;
}

export const InputRadioBox: React.FC<RadioBoxGroupProps> = ({
  options,
  selectedValue,
  onChange,
  expandText,
  label,
}) => {
  const handleRadioChange = (value: string) => {
    onChange(value);
  };

  return (
    <div className="mb-4">
      <label className="block font-medium text-gray-700 mb-3">
        {label}
        <br />
        <span className="opacity-70 font-normal text-justify mt-2">
          {expandText}
        </span>
      </label>
      {options.map((option) => (
        <div key={option} className="flex items-center mb-2 mr-2">
          <input
            type="radio"
            id={option} // Usa un id único para cada botón de radio
            value={option}
            checked={selectedValue === option}
            onChange={() => handleRadioChange(option)}
            className="mr-2 "
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};