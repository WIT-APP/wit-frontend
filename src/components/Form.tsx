/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import InputEmail from "../ui/InputEmail";
import InputSelect from "../ui/InputSelect";
import InputText from "../ui/InputText";
import { DocumentoIdentidad } from "../ui/DocumentoIdentidad";
import { InputCheckbox } from "../ui/InputCheckbox";

const Form = () => {
  const [generoValue, setGeneroValue] = useState("");
  const handleGeneroChange = (event: any) => {
    setGeneroValue(event.target.value);
  };

  /*  const [permisoValue, setPermisoValue] = useState("");
  const handlePermisoChange = (event: any) => {
    setPermisoValue(event.target.value);
  }; */

  const [programaValue, setProgramaValue] = useState("");
  const handleProgramaChange = (event: any) => {
    setProgramaValue(event.target.value);
  };

  const [educacionValue, setEducacionValue] = useState("");
  const handleEducacionChange = (event: any) => {
    setEducacionValue(event.target.value);
  };

  const [profesionalValue, setProfesionalValue] = useState("");
  const handleProfesionalChange = (event: any) => {
    setProfesionalValue(event.target.value);
  };

  const [colectivosValue, setColectivosValue] = useState<string[]>([]);

  const handleColectivosChange = (selectedValues: string[]) => {
    setColectivosValue(selectedValues);
  };
  const colectivosOptions = [
    {
      value: "mujer en situación de vulnerabilidad",
      label: "Mujer en situación de vulnerabilidad",
    },
    { value: "minorías étnicas", label: "Minorías étnicas" },
    {
      value: "inmigrante o refugiado/a",
      label: "Inmigrante o refugiado/a",
    },
    {
      value: "joven sin titulación y sin empleo",
      label: "Joven sin titulación y sin empleo",
    },
    {
      value:
        "desempleada/o de larga duración o debido a la crisis del Covid-19",
      label:
        "Desempleada/o de larga duración o debido a la crisis del Covid-19",
    },
    {
      value: "grupo de edad > 50 años",
      label: "Grupo de edad > 50 años",
    },
    {
      value: "cabeza de familia monoparental",
      label: "Cabeza de familia monoparental",
    },
    {
      value: "no me identifico con ninguna de las opciones anteriores",
      label: "No me identifico con ninguna de las opciones anteriores",
    },
  ];

  const [conexionValue, setConexionValue] = useState("");
  const handleConexionChange = (event: any) => {
    setConexionValue(event.target.value);
  };

  const [formacionValue, setFormacionValue] = useState("");
  const handleFormacionChange = (event: any) => {
    setFormacionValue(event.target.value);
  }


  const [interesesValue, setInteresesValue] = useState("");
  const handleInteresesChange = (event: any) => {
    setInteresesValue(event.target.value);
  };
  const [encontradoValue, setencontradoValue] = useState("");
  const handleEncontradoChange = (event: any) => {
    setencontradoValue(event.target.value);
  };

  return (
    <form className="max-w-md mx-auto mt-10 ">
      <div className="border border-gray-900/10 pb-12">
        <InputText
          type="text"
          id="name"
          placeholder="Escribe tu nombre y apellidos"
          children="Nombre y Apellidos"
          expandText=""
        />
        <InputEmail
          placeholder="Escribe tu correo electrónico"
          children="Correo electrónico"
        />
        <InputText
          type="number"
          id="phone"
          placeholder="8023456789"
          children="Número de teléfono"
          expandText=""
        />
        <InputSelect
          id="genero"
          label="¿Cómo describirías tu género?"
          value={generoValue}
          options={[
            { value: "hombre", label: "Hombre" },
            { value: "mujer", label: "Mujer" },
            { value: "otro", label: "Otro" },
            {
              value: "prefiero no identificarme",
              label: "Prefiero no identificarme",
            },
          ]}
          onChange={handleGeneroChange}
        />
        <InputText
          type="date"
          id="date"
          placeholder="00/00/00"
          children="¿Cuál es tu fecha de nacimiento?"
          expandText=""
        />
        <InputText
          type="text"
          id="pais_de_nacimiento"
          placeholder="¡Nos gusta la diversidad de culturas! Escribe tu país. 
          "
          children="¿Cuál es tu país de nacimiento?
          "
          expandText=""
        />
        <DocumentoIdentidad />
        {/*     <InputText type="radio" id="identidad" children="DNI" value="dni" />
        <InputText type="radio" id="identidad" children="NIE" value="nie" />
        <InputText type="radio" id="identidad" children="Otro" value="otro" /> */}
        {/* Aparece si se selecciona otro Documento de Identidad */}
        {/*     <InputText
          type="text"
          id="tipo"
          placeholder="Escribe tu tipo de documento"
          children="Indica el tipo de documento"
        /> */}
        {/* Aparece si se selecciona NIE */}
        {/*  <InputSelect
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
        /> */}
        <InputText
          type="text"
          id="numero_documento_id"
          placeholder="Escribe el numero de tu documento identidad"
          children="Por favor escribe tu número de documento de identidad aquí"
          expandText=""
        />
        <InputText
          type="text"
          id="direccion"
          placeholder="Calle, Nº, Piso"
          children="¿Cuál es tu dirección de residencia? "
          expandText="Esta formación está abierta a todas/os independientemente del lugar de nacimiento o nacionalidad. Sin embargo, es necesario que acredites el lugar en el que resides habitualmente en España"
        />
        <InputText
          type="text"
          id="ciudad"
          placeholder="Escribe tu ciudad de residencia"
          children="¿En qué ciudad resides?"
          expandText=""
        />
        <InputText
          type="text"
          id="provincia"
          placeholder="Escribe tu provincia de residencia"
          children="¿En qué província resides?"
          expandText=""
        />
        // !! PAIS DE RESIDENCIA A CORREGIR
        <InputText
          type="text"
          id="pais_de_residencia"
          placeholder="Escribe tu pais de residencia"
          children="¿En qué pais resides?"
          expandText=""
        />
        <InputText
          type="number"
          id="codigopostal"
          placeholder="Escribe tu código postal"
          children="Código postal"
          expandText=""
        />
        <InputSelect
          id="programa"
          label="¿Qué programa quieres cursar?"
          value={programaValue}
          options={[
            {
              value: "soporte de Tecnologías de la Información",
              label: "Soporte de Tecnologías de la Información",
            },
            {
              value:
                "automatización de Tecnologías de la Información con Python",
              label:
                "Automatización de Tecnologías de la Información con Python",
            },
          ]}
          onChange={handleProgramaChange}
        />
        <InputSelect
          id="educacion"
          label="¿Cúal es tu nivel de estudios más alto?"
          value={educacionValue}
          options={[
            {
              value: "sin estudios o estudios primarios sin finalizar",
              label: "Sin estudios o estudios primarios sin finalizar",
            },
            { value: "estudios primarios", label: "Estudios primarios" },
            { value: "estudios secundarios", label: "Estudios secundarios" },
            { value: "formación profesional", label: "Formación profesional" },
            {
              value: "estudios universitarios",
              label: "Estudios universitarios",
            },
            { value: "otro", label: "Otro" },
          ]}
          onChange={handleEducacionChange}
        />
        <InputText
          type="text"
          id="titulacion"
          placeholder="Escribe tu titulación más alta"
          children="Indica cúal es la titulación académica más alta que has obtenido"
          expandText=""
        />
        <InputSelect
          id="profesional"
          label="¿En qué situación profesional te encuentras?"
          value={profesionalValue}
          options={[
            {
              value: "Desempleada/o sin ingresos",
              label: "Desempleada/o sin ingresos",
            },
            {
              value: "Desempleada/o con subsidio por desempleo",
              label: "Desempleada/o con subsidio por desempleo",
            },
            {
              value: "Empleada/o a tiempo completo",
              label: "Empleada/o a tiempo completo",
            },
            {
              value: "Empleada/o a tiempo parcial",
              label: "Empleada/o a tiempo parcial",
            },
            { value: "Autónoma/o", label: "Autónoma/o" },
            { value: "Estudiante", label: "Estudiante" },
            { value: "Otro", label: "Otro" },
          ]}
          onChange={handleProfesionalChange}
        />
        <InputCheckbox
          label="¿Te identificarías con alguno de los siguientes colectivos?"
          options={colectivosOptions}
          selectedValues={colectivosValue}
          onChange={handleColectivosChange}
          expandText="Con este programa queremos favorecer a colectivos en situación de vulnerabilidad. Selecciona todas las opciones que se correspondan con tu situación."
        />
        {/*     <InputSelect
          id="colectivos"
          label="¿Te identificarías con alguno de los siguientes colectivos?"
          value={colectivosValue}
          options={[
            {
              value: "mujer en situación de vulnerabilidad",
              label: "Mujer en situación de vulnerabilidad",
            },
            { value: "minorías étnicas", label: "Minorías étnicas" },
            {
              value: "inmigrante o refugiado/a",
              label: "Inmigrante o refugiado/a",
            },
            {
              value: "joven sin titulación y sin empleo",
              label: "Joven sin titulación y sin empleo",
            },
            {
              value:
                "desempleada/o de larga duración o debido a la crisis del Covid-19",
              label:
                "Desempleada/o de larga duración o debido a la crisis del Covid-19",
            },
            {
              value: "grupo de edad > 50 años",
              label: "Grupo de edad > 50 años",
            },
            {
              value: "cabeza de familia monoparental",
              label: "Cabeza de familia monoparental",
            },
            {
              value: "no me identifico con ninguna de las opciones anteriores",
              label: "No me identifico con ninguna de las opciones anteriores",
            },
          ]}
          onChange={handleColectivosChange}
        /> */}
        <InputSelect
          id="conexion"
          label="¿Cómo describirías tu acceso a internet y a dispositivos tecnológicos (ordenador, tablet…)?"
          value={conexionValue}
          options={[
            {
              value: "Sin acceso (no tengo conexión a internet ni dispositivo)",
              label: "Sin acceso (no tengo conexión a internet ni dispositivo)",
            },
            {
              value:
                "Acceso muy limitado (tengo dispositivo pero no tengo conexión a internet)",
              label:
                "Acceso muy limitado (tengo dispositivo pero no tengo conexión a internet)",
            },
            {
              value:
                "Acceso limitado (tengo dispositivo y conexión a internet limitada)",
              label:
                "Acceso limitado (tengo dispositivo y conexión a internet limitada)",
            },
            {
              value:
                "Acceso medio (tengo dispositivo y conexión a internet, a pesar de no ser de buena calidad)",
              label:
                "Acceso medio (tengo dispositivo y conexión a internet, a pesar de no ser de buena calidad)",
            },
            {
              value:
                "Buen acceso (tengo buena conexión a internet y dispositivo)",
              label:
                "Buen acceso (tengo buena conexión a internet y dispositivo)",
            },
          ]}
          onChange={handleConexionChange}
        />
        <InputText
          type="number"
          id="dedicacion"
          placeholder="Escribe el numero de horas semanal "
          children="¿Qué dedicación semanal tendrías para el proceso de formación?"
          expandText="Para este programa, estimamos una dedicación media de 15 horas a la semana, lo equivalente a 3 horas diarias."
        />
        <InputCheckbox
          label="¿Te identificarías con alguno de los siguientes colectivos?"
          options={colectivosOptions}
          selectedValues={colectivosValue}
          onChange={handleColectivosChange}
          expandText="Con este programa queremos favorecer a colectivos en situación de vulnerabilidad. Selecciona todas las opciones que se correspondan con tu situación."
        />

        <InputSelect
          id=" formacion_online"
          label="¿Has hecho alguna vez una formación online?"
          value={formacionValue}
          options={[
            { value: "Sí", label: "Sí" },
            { value: "No", label: "No" },
          ]}
          onChange={handleFormacionChange}
        />

        <InputSelect
          id="intereses"
          label="Escoge la opcion que mejor se ajuste a tus intereses actuales"
          value={interesesValue}
          options={[
            {
              value:
                "Estoy interesada/o en formarme en competencias tecnológicas",
              label:
                "Estoy interesada/o en formarme en competencias tecnológicas",
            },
            {
              value:
                "Estoy interesada/o en obtener un empleo en el sector tecnológico",
              label:
                "Estoy interesada/o en obtener un empleo en el sector tecnológico",
            },
            {
              value: "Necesito formarme para conseguir un empleo estable",
              label: "Necesito formarme para conseguir un empleo estable",
            },
            {
              value: "Quiero cambiar de sector profesional",
              label: "Quiero cambiar de sector profesional",
            },
            { value: "Otra", label: "Otra" },
          ]}
          onChange={handleInteresesChange}
        />
        <InputText
          type="text"
          id="razones"
          placeholder="Escribe las razones"
          children="Explicanos brevemente las razones por las que te gustaria unirte a esta formación"
          expandText="Nos encanta leeros y saber más de vosotros. Estaremos un tiempo compartiendo conocimiento y nuevas experiencias. ¡Así que no te cortes!
          "
        />
        <InputSelect
          id="encontrado"
          label="¿Cómo has encontrado este programa?"
          value={encontradoValue}
          options={[
            { value: "Redes sociales", label: "Redes sociales" },
            { value: "Somos F5", label: "Somos F5" },
            { value: "Factoría F5", label: "Factoría F5" },
            {
              value: "Fundación Don Bosco o sus redes sociales",
              label: "Fundación Don Bosco o sus redes sociales",
            },
            {
              value: "Buscadores de internet (Google)",
              label: "Buscadores de internet (Google)",
            },
          ]}
          onChange={handleEncontradoChange}
        />
        <InputText
          type="text"
          id="informacion"
          placeholder="Escribe aquí"
          children="¿Quieres añadir alguna información que consideres relevante?"
          expandText="Somos todo oídos ;) 
          "
        />
      </div>
    </form>
  );
};

export default Form;
