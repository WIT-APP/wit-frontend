/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {InputSelect} from "./InputSelect";
import {InputText} from "./InputText";
import { InputRadioBox } from "./InputRadioBox";
import { useFormik } from 'formik';
import { FormValues } from "@/pages/FormPage";

interface DocumentoIdentidadProps {
 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value:string;
}

export const DocumentoIdentidad = (value ) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [permisoValue, setPermisoValue] = useState("");

  const radioOptions = [
    "DNI" ,
    "NIE",
    "Otro",
  ];

  const handleRadioChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);

    // Handle conditional logic here based on selectedValue
    if (selectedValue === "Otro") {
      // Handle changes for "Otro" option
      formik.setFieldValue("documento_de_identidad", ""); // Clear the value if needed
      formik.setFieldValue("tipo_documento_identidad", ""); // Clear the value if needed
      formik.setFieldValue("permiso", ""); // Clear the value if needed
    }

    console.log(selectedValue);
  };

  const handlePermisoChange = (selectedValue: string) => {
    setPermisoValue(selectedValue);
    console.log(permisoValue);
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      documento_de_identidad: '',
      tipo_documento_identidad: '',
      permiso: '',
    },
    onSubmit: (values) => {
      values.documento_de_identidad = ""; // Modify the value in the formik values
      values.tipo_documento_identidad = ""; // Modify the value in the formik values
      values.permiso = ""; // Modify the value in the formik values
      
      console.log(values);
    },
  });

  return (
    <div className="mt-5 " data-testid="documento-identidad">
      <div className="flex">
        <InputRadioBox
          label={"Documento de Identidad"}
          options={radioOptions}
          selectedValue={selectedOption}
          onChange={formik.handleChange}
          expandText={""}
          id={'documento_de_identidad'}
        />
      </div>
      {selectedOption === "Otro" && (
        <div className="mb-4">
          <InputText
            type="text"
            id="tipo_documento_identidad"
            placeholder="Escribe tu tipo de documento"
            children={'Si dispones de otro documento de identidad, por favor indícanos qué tipo de documento de identidad'}
            expandText={""}
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
          />
        </div>
      )}
    </div>
  );
};