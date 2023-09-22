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
    <div className="mt-5">
      <label className="block font-bold text-white mb-2">
        {label}
        <br />
        <span className="opacity-70 font-normal text-justify mt-2">
          {expandText}
        </span>
      </label>
      {options.map((option) => (
        <div key={option} className="flex items-center text-white mb-2 mr-2">
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