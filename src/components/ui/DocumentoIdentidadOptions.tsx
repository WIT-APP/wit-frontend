import { InputCheckbox } from "./InputCheckbox";
import InputText from "./InputText";

interface CheckboxGroupProps {
  label: string;
  options: string[];
  selectedValue: string;
  onSelectedOptionChange: (value: string) => void;
  onTypeDocumentChange: (value: string) => void;
  onPermisoValueChange: (value: string) => void;
  expandText: string;
  id_question: string;
  placeholder: string;
  text: string;
}

export const DocumentoIdentidadOptions = ({
  options,
  selectedValue,
  onSelectedOptionChange,
  onTypeDocumentChange,
  onPermisoValueChange,
  expandText,
  label,
  placeholder,
  id_question,
  text,
}: CheckboxGroupProps) => {
  
  return (
    <div className="mb-4" data-testid="documento-identidad">
      <label htmlFor="identidad" className="block font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex">
        {options.map((option) => (
          <div key={option} className="mr-4">
            <label htmlFor={option} className="flex items-center">
              <input
                type="radio"
                id={option}
                name="identidad"
                value={option}
                checked={selectedValue === option}
                onChange={(event) => onSelectedOptionChange(event.target.value)}
                className="form-radio mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      // Dentro de DocumentoIdentidadOptions, usa el estado selectedValue para determinar cuándo mostrar las preguntas adicionales
{(selectedValue === "Otro" ) && (
  <div className="mb-4">
    <InputText
      // Renderiza la pregunta con ID 10
      key={10}
      id={id_question}
      type={"document"}
      expandText={expandText}      children={text}
      placeholder={placeholder}
      onChange={(event) => onTypeDocumentChange(event.target.value)}
    />
  </div>
)}

{(selectedValue === "Otro" || selectedValue === "NIE") && (
  <div className="mb-4">
    <InputCheckbox
      // Renderiza la pregunta con ID 11
      key={11}
      options={options}
      label="En caso de tener nacionalidad extranjera, indica el carácter de tu permiso en España:"
      selectedValues={[]}
      onChange={(selectedValues) => onPermisoValueChange(selectedValues)}
      expandText=""
    />
  </div>
)}</div>
)}