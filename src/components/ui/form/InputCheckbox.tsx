
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
            type="checkbox"
            checked={selectedValues.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="mr-2"
          />
          {option}
        </div>
      ))}
    </div>
  );
};
