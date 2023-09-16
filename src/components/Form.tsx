/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from "react";
import InputEmail from "../ui/InputEmail";
import InputSelect from "../ui/InputSelect";
import InputText from "../ui/InputText";
import { DocumentoIdentidad } from "../ui/DocumentoIdentidad";
import { InputCheckbox } from "../ui/InputCheckbox";
import InputSelectCountry from "../ui/InputSelectCountry";

const Form = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApplicant((prevApplicant) => ({
      ...prevApplicant,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(applicant);
  };

  const [applicant, setApplicant] = useState({
    nombre_apellidos: "",
    correo_electronico: "",
    telefono: "",
    fecha_de_nacimiento: "",
    pais_de_nacimiento: "",
    numero_documento_id: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    codigo_postal: "",
    estudio_mas_alto: "",
    dedicacion_semanal: "",
    razones_para_unir: "",
    mas_informacion: "",
  });

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
  };

  const [interesesValue, setInteresesValue] = useState("");
  const handleInteresesChange = (event: any) => {
    setInteresesValue(event.target.value);
  };
  const [encontradoValue, setencontradoValue] = useState("");
  const handleEncontradoChange = (event: any) => {
    setencontradoValue(event.target.value);
  };

  return (
    <div className="w-screen flex items-center justify-end bg-[url('/form-image.jpg')] bg-contain bg-no-repeat bg-left bg-fixed bg-lightgray">
      <div className="w-2/4 flex flex-col justify-between items-center bg-gray rounded-lg border-2 border-white m-10 shadow-lg p-10">
        <div className="w-7/8">
          <h1 className="text-2xl font-bold mt-4 mb-8 text-center">
            Estás a un paso de conseguir tu BECA de Google
          </h1>
          <p className="text-lg font-semibold text-gray-700 text-center">
            Completa los siguientes campos para terminar el proceso, y <br />
            ¡Que empiece la aventura!
          </p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="w-4/5 mt-10">
          <div className="">
            <InputText
              type="text"
              id="nombre_apellidos"
              placeholder="Escribe tu nombre y apellidos"
              children="Nombre y Apellidos"
              onChange={handleChange}
              expandText=""
            />
            <InputEmail
              placeholder="Escribe tu correo electrónico"
              children="Correo electrónico"
              onChange={handleChange}
            />
            <InputText
              type="number"
              id="telefono"
              placeholder="8023456789"
              children="Número de teléfono"
              expandText=""
              onChange={handleChange}
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
              id="fecha_de_nacimiento"
              placeholder="00/00/00"
              children="¿Cuál es tu fecha de nacimiento?"
              expandText=""
              onChange={handleChange}
            />
            <InputText
              type="text"
              id="pais_de_nacimiento"
              placeholder="¡Nos gusta la diversidad de culturas! Escribe tu país."
              children="¿Cuál es tu país de nacimiento?"
              expandText=""
              onChange={handleChange}
            />
            <DocumentoIdentidad />
            <InputText
              type="text"
              id="numero_documento_id"
              placeholder="Escribe el numero de tu documento identidad"
              children="Por favor escribe tu número de documento de identidad aquí"
              expandText=""
              onChange={handleChange}
            />
            <InputText
              type="text"
              id="direccion"
              placeholder="Calle, Nº, Piso"
              children="¿Cuál es tu dirección de residencia? "
              expandText="Esta formación está abierta a todas/os independientemente del lugar de nacimiento o nacionalidad. Sin embargo, es necesario que acredites el lugar en el que resides habitualmente en España"
              onChange={handleChange}
            />
            <InputText
              type="text"
              id="ciudad"
              placeholder="Escribe tu ciudad de residencia"
              children="¿En qué ciudad resides?"
              expandText=""
              onChange={handleChange}
            />
            <InputText
              type="text"
              id="provincia"
              placeholder="Escribe tu provincia de residencia"
              children="¿En qué província resides?"
              expandText=""
              onChange={handleChange}
            />
            <InputSelectCountry
              id="pais_de_residencia"
              label="¿En qué país resides?"
              value={educacionValue}
              onChange={handleEducacionChange}
            />
            <InputText
              type="number"
              id="codigo_postal"
              placeholder="Escribe tu código postal"
              children="Código postal"
              expandText=""
              onChange={handleChange}
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
            <InputCheckbox
              label="¿Te identificarías con alguno de los siguientes colectivos?"
              options={colectivosOptions}
              selectedValues={colectivosValue}
              onChange={handleColectivosChange}
              expandText="Con este programa queremos favorecer a colectivos en situación de vulnerabilidad. Selecciona todas las opciones que se correspondan con tu situación."
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
                {
                  value: "estudios secundarios",
                  label: "Estudios secundarios",
                },
                {
                  value: "formación profesional",
                  label: "Formación profesional",
                },
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
              id="estudio_mas_alto"
              placeholder="Escribe tu titulación más alta"
              children="Indica cúal es la titulación académica más alta que has obtenido"
              expandText=""
              onChange={handleChange}
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
              type="number"
              id="dedicacion_semanal"
              placeholder="Escribe el numero de horas semanal "
              children="¿Qué dedicación semanal tendrías para el proceso de formación?"
              expandText="Para este programa, estimamos una dedicación media de 15 horas a la semana, lo equivalente a 3 horas diarias."
              onChange={handleChange}
            />
            <InputSelect
              id="conexion"
              label="¿Cómo describirías tu acceso a internet y a dispositivos tecnológicos (ordenador, tablet…)?"
              value={conexionValue}
              options={[
                {
                  value:
                    "Sin acceso (no tengo conexión a internet ni dispositivo)",
                  label:
                    "Sin acceso (no tengo conexión a internet ni dispositivo)",
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
            <InputText
              type="text"
              id="razones_para_unir"
              placeholder="Escribe las razones"
              children="Explicanos brevemente las razones por las que te gustaria unirte a esta formación"
              expandText="Nos encanta leeros y saber más de vosotros. Estaremos un tiempo compartiendo conocimiento y nuevas experiencias. ¡Así que no te cortes!"
              onChange={handleChange}
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
              id="mas_informacion"
              placeholder="Escribe aquí"
              children="¿Quieres añadir alguna información que consideres relevante?"
              expandText="Somos todo oídos ;) "
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue text-sm text-white py-3 mt-6 rounded-lg w-1/4"
            >
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
