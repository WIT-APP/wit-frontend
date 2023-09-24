import React from "react";

interface RadioBoxGroupProps {
  label: string;
  id:string,
  options: string[];
  selectedValue: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  expandText: string;
}

export const InputRadioBox: React.FC<RadioBoxGroupProps> = ({
  options,
  //selectedValue,
  expandText,
  label,
  onChange,
}) => {
  //const [localSelectedValue, setLocalSelectedValue] = useState(selectedValue);

  // const handleRadioChange = (option: string) => {
  //   setLocalSelectedValue(option);
  //   onChange(option);
  // };

  return (
    <div className="mt-5">
      <label  className="block font-bold text-white mb-2" >
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
            id={option}
            value={option}
            //checked={localSelectedValue === option}
            onChange={onChange}
            className="mr-2"
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};