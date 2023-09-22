/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";
import {InputSelect} from "./InputSelect";
import {InputText} from "./InputText";
import { InputRadioBox } from "./InputRadioBox";

interface DocumentoIdentidadProps {
  onSelectedOptionChange: (value: string) => void;
  onTipoDocumentoChange: (value: string) => void;
  onPermisoValueChange: (value: string) => void;
}

export const DocumentoIdentidad = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [permisoValue, setPermisoValue] = useState("");

  const radioOptions = [
    "DNI" ,
    "NIE",
    "Otro",
  ];

  const handleRadioChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
    console.log(selectedOption)
  };

  const handlePermisoChange = (selectedValue: string) => {
    setPermisoValue(selectedValue);
    console.log(permisoValue)
  };

   return (
    <div className="mt-5 " data-testid="documento-identidad">
      <div className="flex">
        <InputRadioBox 
            label={"Documento de Identidad"} 
            options={radioOptions} 
            selectedValue={selectedOption} 
            onChange={handleRadioChange} 
            expandText={""}
        />          
      </div>
      {selectedOption === "Otro" && (
        <div className="mb-4">
          <InputText
            type="text"
            id="tipo"
            placeholder="Escribe tu tipo de documento"
            children={'Si dispones de otro documento de identidad, por favor indícanos qué tipo de documento de identidad'} 
            expandText={""}       
          />
        </div>
      )}
      {(selectedOption === "NIE" || selectedOption === "Otro") && (
        <div className="mb-4 ">
          <InputSelect
            id="permiso"
            label="Indica el carácter de tu permiso en España"
            options={[
              "Permiso de residencia y trabajo",
              "Permiso de residencia y estudios",
              "No dispongo de permiso (No es un problema para tener acceso al curso)",
              "Otro",
            ]}
            value={permisoValue} 
            onChange={handlePermisoChange }  
          />
        </div>
      )}
    </div>
  );
};
