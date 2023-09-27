import React, { useState } from "react";

interface RadioBoxGroupProps {
  label: React.ReactNode;
  id: string;
  options: string[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
  expandText?: string;
  required?: boolean;
}

export const InputRadioBox: React.FC<RadioBoxGroupProps> = ({
  options,
  selectedValue,
  expandText,
  label,
  onChange,
  required,
  id
}) => {
  const [localSelectedValue, setLocalSelectedValue] = useState(selectedValue);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setLocalSelectedValue(newValue);
    onChange(newValue);
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
            id={id}
            name={id}
            value={option}
            checked={localSelectedValue === option}
            onChange={handleRadioChange}
            className="mr-2"
            required={required}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};