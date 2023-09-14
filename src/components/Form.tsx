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

  const [programaValue, setProgramaValue] = useState("");
  const handleProgramaChange = (event: any) => {
    setProgramaValue(event.target.value);
  }

  const [educacionValue, setEducacionValue] = useState("");
  const handleEducacionChange = (event: any) => {
    setEducacionValue(event.target.value);
  }

  const [profesionalValue, setProfesionalValue] = useState("");
  const handleProfesionalChange = (event: any) => {
    setProfesionalValue(event.target.value);
  }


  const [colectivosValue, setColectivosValue] = useState("");
  const handleColectivosChange = (event: any) => {
    setColectivosValue(event.target.value);
  }


  const [interesesValue, setinteresesValue] = useState("");
  const handleInteresesChange = (event: any) => {
    setinteresesValue(event.target.value);


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

      <InputSelect id="programa" label="¿Qué programa quieres cursar?" value={programaValue} options={[
        { value: "soporte de Tecnologías de la Información", label: "Soporte de Tecnologías de la Información" },
        { value: "automatización de Tecnologías de la Información con Python", label: "Automatización de Tecnologías de la Información con Python" },
      ]} onChange={handleProgramaChange} />

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

      <InputSelect id="colectivos" label="¿Te identificarías con alguno de los siguientes colectivos?" value={colectivosValue} options={[
        { value: "mujer en situación de vulnerabilidad", label: "Mujer en situación de vulnerabilidad" },
        { value: "minorías étnicas", label: "Minorías étnicas" },
        { value: "inmigrante o refugiado/a", label: "Inmigrante o refugiado/a" },
        { value: "joven sin titulación y sin empleo", label: "Joven sin titulación y sin empleo" },
        { value: "desempleada/o de larga duración o debido a la crisis del Covid-19", label: "Desempleada/o de larga duración o debido a la crisis del Covid-19" },
        { value: "grupo de edad > 50 años", label: "Grupo de edad > 50 años" },
        { value: "cabeza de familia monoparental", label: "Cabeza de familia monoparental" },
        { value: "no me identifico con ninguna de las opciones anteriores", label: "No me identifico con ninguna de las opciones anteriores" },
      ]} onChange={handleColectivosChange} />

      <InputText type="number" id="dedicacion" placeholder="¿Qué dedicación semanal tendrías para el proceso de formación?" children="dedicacion" />



      <InputSelect id="intereses" label="Escoge la opcion que mejor se ajuste a tus intereses actuales" value={interesesValue} options={[
        { value: "Estoy interesada/o en formarme en competencias tecnológicas", label: "Estoy interesada/o en formarme en competencias tecnológicas" },
        { value: "Estoy interesada/o en obtener un empleo en el sector tecnológico", label: "Estoy interesada/o en obtener un empleo en el sector tecnológico" },
        { value: "Necesito formarme para conseguir un empleo estable", label: "Necesito formarme para conseguir un empleo estable" },
        { value: "Quiero cambiar de sector profesional", label: "Quiero cambiar de sector profesional" },
        { value: "Otra", label: "Otra" },
      ]} onChange={handleInteresesChange} />
    </form>
  );
};

export default Form;
