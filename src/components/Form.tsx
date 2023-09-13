/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import InputEmail from "../ui/InputEmail";
import InputSelect from "../ui/InputSelect";
import InputText from "../ui/InputText";

const Form = () => {
  const [generoValue, setGeneroValue] = useState("");
  const handleGeneroChange = (event: any) => {
    setGeneroValue(event.target.value);

  }
  return (
    <form>
        <InputText type="text" id="name" placeholder="Escribe tu nombre y apellidos" children="Nombre y Apellidos" />
        <InputEmail placeholder="Correo electrónico" children="Escribe tu correo electrónico" />
        <InputText type="date" id="date" placeholder="00/00/00" children="Fecha de nacimiento"  />
        <InputText type="number" id="phone" placeholder="Número de teléfono" children="Nombre y Apellidos" />
        <InputSelect id="genero" label="¿Cómo describirías tu género?" value={generoValue} options={[
          { value:"Hombre", label:"Hombre"},
          {value:"Mujer", label:"Mujer" },
          {value:"Otro", label:"Otro" },
          {value:"Prefiero no identificarme", label:"Prefiero no identificarme" },

        ]} onChange={handleGeneroChange} />



     
    </form>
  );
};

export default Form;
