import { useState } from "react";
import InputSelect from "./InputSelect";

interface DocumentoIdentidadProps {
  onSelectedOptionChange: (event: any) => void;
  onTipoDocumentoChange: (event: any) => void;
  onPermisoValueChange: (event: any) => void;
}

export const DocumentoIdentidad: React.FC<DocumentoIdentidadProps> = ({
  onSelectedOptionChange,
  onTipoDocumentoChange,
  onPermisoValueChange,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [permisoValue, setPermisoValue] = useState("");

  const radioOptions = [
    { id: "DNI", label: "DNI", value: "DNI" },
    { id: "NIE", label: "NIE", value: "NIE" },
    { id: "Otro", label: "Otro", value: "Otro" },
  ];

  const handleRadioChange = (event: any) => {
    setSelectedOption(event.target.value);
    onSelectedOptionChange(event.target.value);
  };

  const handlePermisoChange = (event: any) => {
    setPermisoValue(event.target.value);
    onPermisoValueChange(event.target.value);
  };

  const handleTipoDocumento = (event: any) => {
    setTipoDocumento(event.target.value);
    onTipoDocumentoChange(event.target.value);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="identidad"
        className="block font-medium text-gray-700 mb-2"
      >
        Documento de Identidad
      </label>
      <div className="flex">
        {radioOptions.map((option) => (
          <div key={option.id} className="mr-4">
            <label htmlFor={option.id} className="flex items-center">
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
        ))}
      </div>
      {selectedOption === "Otro" && (
        <div className="mt-4">
          <label htmlFor="tipo" className="block text-gray-700 mb-2">
            Si dispones de otro documento de identidad, por favor indícanos qué
            tipo de documento de identidad
          </label>
          <input
            type="text"
            id="tipo"
            placeholder="Escribe tu tipo de documento"
            value={tipoDocumento}
            onChange={handleTipoDocumento}
            className="form-input w-full px-3 py-2 rounded-radius-050"
          />
        </div>
      )}
      {(selectedOption === "NIE" || selectedOption === "Otro") && (
        <div className="mb-4">
          <InputSelect
            id="permiso"
            label="Indica el carácter de tu permiso en España"
            options={[
              {
                value: "Permiso de residencia y trabajo",
                label: "Permiso de residencia y trabajo",
              },
              {
                value: "Permiso de residencia y estudios",
                label: "Permiso de residencia y estudios",
              },
              {
                value:
                  "No dispongo de permiso (No es un problema para tener acceso al curso)",
                label:
                  "No dispongo de permiso (No es un problema para tener acceso al curso)",
              },
              { value: "Otro", label: "Otro" },
            ]}
            onChange={handlePermisoChange}
          />
        </div>
      )}
    </div>
  );
};
