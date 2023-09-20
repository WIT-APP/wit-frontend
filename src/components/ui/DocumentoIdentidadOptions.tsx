

interface CheckboxGroupProps {
    label: string;
    options: string[];
    selectedValues: string[];
    onChange: (selectedValues: string[]) => void;
    expandText: string;
  }

export const DocumentoIdentidadOptions = ({
    options,
    selectedValues,
    onChange,
    expandText,
    label,
  }: CheckboxGroupProps)=> {
  return (
    <div className="mb-4" data-testid="documento-identidad">
    <label
      htmlFor="identidad"
      className="block font-medium text-gray-700 mb-2"
    >
      Documento de Identidad
    </label>
    <div className="flex">
      {options.map((option) => (
        <div key={option} className="mr-4">
          <label htmlFor={option} className="flex items-center">
            <input
              type="radio"
              id={option.id}
              name="identidad"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleRadioChange}
              className="form-radio mr-2"
            />
            {option.label}
          </label>
        </div>
      ))}</div>
      </div>
  )}
 
 