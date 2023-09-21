
interface CheckboxGroupProps {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  expandText: string;
}

export const InputCheckbox = ({
  options,
  selectedValues,
  onChange,
  expandText,
  label,
}: CheckboxGroupProps) => {
  const handleCheckboxChange = (value: string) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];

    onChange(updatedValues);
  };

  return (
    <div className="mt-2">
      <label className="block font-medium text-white mb-2">
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
            checked={selectedValues.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="mr-2 "
          />
          {option}
        </div>
      ))}
    </div>
  );
};
