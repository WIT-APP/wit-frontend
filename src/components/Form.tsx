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

  const [educacionValue, setEducacionValue] = useState("");
  const handleEducacionChange = (event: any) => {
    setEducacionValue(event.target.value);
  }

  const [profesionalValue, setProfesionalValue] = useState("");
  const handleProfesionalChange = (event: any) => {
    setProfesionalValue(event.target.value);
  }



  return (
    <form>
      
      <InputText type="text" id="name" placeholder="Escribe tu nombre y apellidos" children="Nombre y Apellidos" />
      <InputEmail placeholder="Correo electrónico" children="Escribe tu correo electrónico" />
      <InputText type="date" id="date" placeholder="00/00/00" children="Fecha de nacimiento" />
      <InputText type="number" id="phone" placeholder="8023456789" children="Número de teléfono" />
      <InputSelect id="genero" label="¿Cómo describirías tu género?" value={generoValue} options={[
        { value: "hombre", label: "Hombre" },
        { value: "mujer", label: "Mujer" },
        { value: "otro", label: "Otro" },
        { value: "prefiero no identificarme", label: "Prefiero no identificarme" },
      ]} onChange={handleGeneroChange} />
      <InputText type="radio" id="identidad" children="DNI" value="dni" />
      <InputText type="radio" id="identidad" children="NIE" value="nie" />
      <InputText type="radio" id="identidad" children="Otro" value="otro" />

      <InputText type="text" id="direccion" placeholder="Calle, Nro, Piso" children="Calle, Nro, Piso" />
      <InputText type="text" id="ciudad" placeholder="Escribe tu ciudad de residencia" children="ciudad de residencia" />
      <InputText type="text" id="provincia" placeholder="Escribe tu provincia de residencia" children="provincia de residencia" />
      <InputText type="number" id="codigopostal" placeholder="Escribe tu código postal" children="código postal" />

      <InputSelect id="educacion" label="¿Cúal es tu nivel de estudios más alto?" value={educacionValue} options={[
        { value: "sin estudios o estudios primarios sin finalizar", label: "Sin estudios o estudios primarios sin finalizar" },
        { value: "estudios primarios", label: "Estudios primarios" },
        { value: "estudios secundarios", label: "Estudios secundarios" },
        { value: "formación profesional", label: "Formación profesional" },
        { value: "estudios universitarios", label: "Estudios universitarios" },
        { value: "otro", label: "Otro" },
      ]} onChange={handleEducacionChange} />

<InputSelect id="profesional" label="¿En qué situación profesional te encuentras?" value={profesionalValue} options={[
        { value: "Desempleada/o sin ingresos", label: "Desempleada/o sin ingresos" },
        { value: "Desempleada/o con subsidio por desempleo", label: "Desempleada/o con subsidio por desempleo" },
        { value: "Empleada/o a tiempo completo", label: "Empleada/o a tiempo completo" },
        { value: "Empleada/o a tiempo parcial", label: "Empleada/o a tiempo parcial" },
        { value: "Autónoma/o", label: "Autónoma/o" },
        { value: "Estudiante", label: "Estudiante" },
        { value: "Otro", label: "Otro" },
      ]} onChange={handleProfesionalChange} />


    </form>
  );
};

export default Form;
