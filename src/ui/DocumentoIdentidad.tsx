import { useState } from "react";
import InputSelect from "./InputSelect";

export const DocumentoIdentidad = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [permisoValue, setPermisoValue] = useState("");

  const radioOptions = [
    { id: "dni", label: "DNI", value: "dni" },
    { id: "nie", label: "NIE", value: "nie" },
    { id: "otro", label: "Otro", value: "otro" },
  ];

  const handleRadioChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handlePermisoChange = (event: any) => {
    setPermisoValue(event.target.value);
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
      {selectedOption === "otro" && (
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
            onChange={(e) => setTipoDocumento(e.target.value)}
            className="form-input w-full px-3 py-2 rounded-radius-050"
          />
        </div>
      )}
      {(selectedOption === "nie" || selectedOption === "otro") && (
        <div className="mb-4">
          <InputSelect
            id="permiso"
            label="Indica el carácter de tu permiso en España"
            value={permisoValue}
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
