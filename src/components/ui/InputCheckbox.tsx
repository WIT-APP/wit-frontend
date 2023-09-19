interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  label: string;
  options: CheckboxOption[];
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
    <div>
      <label className="block font-medium text-gray-700 mb-1">
        {label}
        <br />
        <span className="opacity-70 font-normal text-justify">
          {expandText}
        </span>
      </label>
      {options.map((option) => (
        <div key={option.value} className="flex items-center mb-2 mr-2">
          <input
            type="checkbox"
            checked={selectedValues.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
            className="mr-2"
          />
          {option.label}
        </div>
      ))}
    </div>
  );
};