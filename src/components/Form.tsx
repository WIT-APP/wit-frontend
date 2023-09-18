/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from "react";
import InputEmail from "../ui/InputEmail";
import InputSelect from "../ui/InputSelect";
import InputText from "../ui/InputText";
import { DocumentoIdentidad } from "../ui/DocumentoIdentidad";
import { InputCheckbox } from "../ui/InputCheckbox";
import InputSelectCountry from "../ui/InputSelectCountry";
import { CreateApplicant } from "../interfaces/applicant.interface";
import InputTextarea from "../ui/InputTextarea";
import { useNewApplication } from "../services/RegisterApplicant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApplicant((prevApplicant) => ({
      ...prevApplicant,
      [name]: value,
    }));
  };

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicant((prevApplicant) => ({
      ...prevApplicant,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: any) => {
    const { name, value } = event.target;
    setApplicant((Applicant) => ({
      ...Applicant,
      [name]: value,
    }));
  };

  const handleSelectNumberChange = (event: any) => {
    const { name, value } = event.target;
    const number = parseInt(value);
    setApplicant((Applicant) => ({
      ...Applicant,
      [name]: number,
    }));
  };

  const handleSelectBooleanChange = (event: any) => {
    const { name, value } = event.target;
    if (value == "Si") {
      setApplicant((Applicant) => ({
        ...Applicant,
        [name]: true,
      }));
    } else {
      setApplicant((Applicant) => ({
        ...Applicant,
        [name]: false,
      }));
    }
  };

  const handleColectivosChange = (selectedValues: string[]) => {
    setApplicant((prevAplicant) => ({
      ...prevAplicant,
      colectivo: selectedValues,
    }));
  };

  const [applicant, setApplicant] = useState<CreateApplicant>({
    nombre_apellidos: "",
    correo_electronico: "",
    telefono: 0,
    genero: "",
    fecha_de_nacimiento: "",
    pais_de_nacimiento: "",
    documento_de_identidad: "",
    numero_documento_id: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    codigo_postal: 0,
    pais_de_residencia: "",
    programa_cursar: "",
    permiso: "Permiso de residencia y trabajo",
    colectivo: [],
    educacion: "",
    estudio_mas_alto: "",
    situacion_profesional: "",
    intereses_actuales: "",
    dedicacion_semanal: 0,
    acceso_internet_dispositivos: "",
    formacion_online: false,
    razones_para_unir: "",
    encontrar_programa: "",
    mas_informacion: "",
  });

  const [selectedOption, setSelectedOption] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [permisoValue, setPermisoValue] = useState("");

  const handleSelectedOptionChange = (value: any) => {
    setSelectedOption(value);
    setApplicant((prevApplicant) => ({
      ...prevApplicant,
      documento_de_identidad: value,
    }));
  };

  const handleTipoDocumentoChange = (value: any) => {
    setTipoDocumento(value);
    // if (selectedOption == "Otro") {
    //   setApplicant((prevApplicant) => ({
    //     ...prevApplicant,
    //     documento_de_identidad: value,
    //   }));
    // }
  };

  const handlePermisoValueChange = (value: any) => {
    setPermisoValue(value);
    setApplicant((prevApplicant) => ({
      ...prevApplicant,
      permiso: value,
    }));
  };

  const notify = () =>
    toast("Su aplicacion ha sido completada ! Gracias por aplicar !");

  const mutation = useNewApplication();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      mutation.mutateAsync(applicant);
      console.log("Application submitted successfully");
    } catch (error: any) {
      console.error("Error submitting application:", error.message);
    }
    console.log(applicant);
  };

  /*   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://wit-backend-factoriaf5.up.railway.app/applicant",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(applicant),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error submitting application");
      }

      console.log("Application submitted successfully");
    } catch (error: any) {
      console.error("Error submitting application:", error.message);
    }

    console.log(applicant);
    console.log(`tipo colectivo: ${typeof applicant.colectivo}`);
    console.log(`value: ${applicant.colectivo}`);
  }; */

  return (
    <div className="md:justify-end md:bg-[url('/form-image.jpg')] md:bg-lightgray lg:bg-contain w-screen flex items-center justify-center bg-lightgreen bg-cover bg-no-repeat bg-left bg-fixed p-4 md:mb-16">
      <div className="sm:w-3/4 sm:m-10 sm:p-10 md:w-2/3 md:bg-gray lg:w-2/4 p-5 m-5 flex flex-col justify-between items-center bg-lightgray rounded-lg border-2 border-white shadow-lg">
        <div className="w-7/8">
          <h1 className="text-2xl font-bold mt-4 mb-8 text-center">
            Estás a un paso de conseguir tu BECA de Google
          </h1>
          <p className="text-lg font-semibold text-gray-700 text-center">
            Completa los siguientes campos para terminar el proceso, y <br />
            ¡Que empiece la aventura!
          </p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="sm:w-4/5 mt-10">
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
              onChange={handleSelectNumberChange}
            />
            <InputSelect
              id="genero"
              label="¿Cómo describirías tu género?"
              options={[
                { value: "Hombre", label: "Hombre" },
                { value: "Mujer", label: "Mujer" },
                { value: "Otro", label: "Otro" },
                {
                  value: "Prefiero no identificarme",
                  label: "Prefiero no identificarme",
                },
              ]}
              onChange={handleSelectChange}
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
            {/* FALTA POR ARREGLAR !!!!!!!!!!!!!!! */}
            <DocumentoIdentidad
              onSelectedOptionChange={handleSelectedOptionChange}
              onTipoDocumentoChange={handleTipoDocumentoChange}
              onPermisoValueChange={handlePermisoValueChange}
            />
            {/* FALTA ! */}
            <InputText
              type="text"
              id="numero_documento_id"
              placeholder="Escribe el numero de tu documento identidad"
              children="Por favor escribe tu número de documento de identidad aquí"
              expandText=""
              onChange={handleChange}
            />
            <InputTextarea
              id="direccion"
              placeholder="Calle, Nº, Piso"
              children="¿Cuál es tu dirección de residencia? "
              expandText="Esta formación está abierta a todas/os independientemente del lugar de nacimiento o nacionalidad. Sin embargo, es necesario que acredites el lugar en el que resides habitualmente en España"
              onChange={handleChangeTextarea}
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
              onChange={handleSelectChange}
            />
            <InputText
              type="number"
              id="codigo_postal"
              placeholder="Escribe tu código postal"
              children="Código postal"
              expandText=""
              onChange={handleSelectNumberChange}
            />
            <InputSelect
              id="programa_cursar"
              label="¿Qué programa quieres cursar?"
              options={[
                {
                  value: "Soporte de Tecnologías de la Información",
                  label: "Soporte de Tecnologías de la Información",
                },
                {
                  value:
                    "Automatización de Tecnologías de la Información con Python",
                  label:
                    "Automatización de Tecnologías de la Información con Python",
                },
              ]}
              onChange={handleSelectChange}
            />
            <InputCheckbox
              label="¿Te identificarías con alguno de los siguientes colectivos?"
              options={[
                {
                  value: "Mujer en situación de vulnerabilidad",
                  label: "Mujer en situación de vulnerabilidad",
                },
                { value: "Minorías étnicas", label: "Minorías étnicas" },
                {
                  value: "Inmigrante o refugiada/o",
                  label: "Inmigrante o refugiada/o",
                },
                {
                  value: "Joven sin titulación y sin empleo",
                  label: "Joven sin titulación y sin empleo",
                },
                {
                  value:
                    "Desempleada/o de larga duración o debido a la crisis del Covid-19",
                  label:
                    "Desempleada/o de larga duración o debido a la crisis del Covid-19",
                },
                {
                  value: "Grupo de edad > 50 años",
                  label: "Grupo de edad > 50 años",
                },
                {
                  value: "Cabeza de familia monoparental",
                  label: "Cabeza de familia monoparental",
                },
                {
                  value:
                    "No me identifico con ninguna de las opciones anteriores",
                  label:
                    "No me identifico con ninguna de las opciones anteriores",
                },
              ]}
              selectedValues={applicant.colectivo}
              onChange={handleColectivosChange}
              expandText="Con este programa queremos favorecer a colectivos en situación de vulnerabilidad. Selecciona todas las opciones que se correspondan con tu situación."
            />
            <InputSelect
              id="educacion"
              label="¿Cúal es tu nivel de estudios más alto?"
              options={[
                {
                  value: "Sin estudios o estudios primarios sin finalizar",
                  label: "Sin estudios o estudios primarios sin finalizar",
                },
                { value: "Estudios primarios", label: "Estudios primarios" },
                {
                  value: "Estudios secundarios",
                  label: "Estudios secundarios",
                },
                {
                  value: "Formación profesional",
                  label: "Formación profesional",
                },
                {
                  value: "Estudios universitarios",
                  label: "Estudios universitarios",
                },
                { value: "Otro", label: "Otro" },
              ]}
              onChange={handleSelectChange}
            />
            <InputTextarea
              id="estudio_mas_alto"
              placeholder="Escribe tu titulación más alta"
              children="Indica cúal es la titulación académica más alta que has obtenido"
              expandText=""
              onChange={handleChangeTextarea}
            />
            <InputSelect
              id="situacion_profesional"
              label="¿En qué situación profesional te encuentras?"
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
              onChange={handleSelectChange}
            />
            <InputSelect
              id="intereses_actuales"
              label="Escoge la opcion que mejor se ajuste a tus intereses actuales"
              options={[
                {
                  value:
                    "Estoy interesada/o en formarme en competencias tecnológicas",
                  label:
                    "Estoy interesada/o en formarme en competencias tecnológicas",
                },
                {
                  value:
                    "Estoy interesada/o en obtener un empleo del sector tecnológico",
                  label:
                    "Estoy interesada/o en obtener un empleo del sector tecnológico",
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
              onChange={handleSelectChange}
            />
            <InputText
              type="number"
              id="dedicacion_semanal"
              placeholder="Escribe el numero de horas semanal "
              children="¿Qué dedicación semanal tendrías para el proceso de formación?"
              expandText="Para este programa, estimamos una dedicación media de 15 horas a la semana, lo equivalente a 3 horas diarias."
              onChange={handleSelectNumberChange}
            />
            <InputSelect
              id="acceso_internet_dispositivos"
              label="¿Cómo describirías tu acceso a internet y a dispositivos tecnológicos (ordenador, tablet…)?"
              options={[
                {
                  value:
                    "Sin acceso (no tengo conexión a internet ni dispositivo)",
                  label:
                    "Sin acceso (no tengo conexión a internet ni dispositivo)",
                },
                {
                  value:
                    "Acceso muy limitado (tengo dispositivo pero no tengo internet)",
                  label:
                    "Acceso muy limitado (tengo dispositivo pero no tengo internet)",
                },
                {
                  value:
                    "Acceso limitado (tengo dispositivo e internet limitado)",
                  label:
                    "Acceso limitado (tengo dispositivo e internet limitado)",
                },
                {
                  value:
                    "Acesso medio (tengo dispositivo e internet de baja calidad)",
                  label:
                    "Acesso medio (tengo dispositivo e internet de baja calidad)",
                },
                {
                  value:
                    "Buen acceso (tengo buena conexion a internet y dispositivo)",
                  label:
                    "Buen acceso (tengo buena conexion a internet y dispositivo)",
                },
              ]}
              onChange={handleSelectChange}
            />
            <InputSelect
              id="formacion_online"
              label="¿Has hecho alguna vez una formación online?"
              options={[
                { value: "Si", label: "Si" },
                { value: "No", label: "No" },
              ]}
              onChange={handleSelectBooleanChange}
            />
            <InputTextarea
              id="razones_para_unir"
              placeholder="Escribe las razones"
              children="Explicanos brevemente las razones por las que te gustaria unirte a esta formación"
              expandText="Nos encanta leeros y saber más de vosotros. Estaremos un tiempo compartiendo conocimiento y nuevas experiencias. ¡Así que no te cortes!"
              onChange={handleChangeTextarea}
            />
            <InputSelect
              id="encontrar_programa"
              label="¿Cómo has encontrado este programa?"
              options={[
                { value: "Redes sociales", label: "Redes sociales" },
                { value: "Somos F5", label: "Somos F5" },
                { value: "Factoria F5", label: "Factoria F5" },
                {
                  value: "Fundación Don Bosco o sus redes sociales",
                  label: "Fundación Don Bosco o sus redes sociales",
                },
                {
                  value: "Buscadores de internet (Google)",
                  label: "Buscadores de internet (Google)",
                },
              ]}
              onChange={handleSelectChange}
            />
            <InputTextarea
              id="mas_informacion"
              placeholder="Escribe aquí"
              children="¿Quieres añadir alguna información que consideres relevante?"
              expandText="Somos todo oídos ;) "
              onChange={handleChangeTextarea}
            />
            <button
              type="submit"
              className="bg-blue text-sm text-white p-3 py-3 mt-6 rounded-lg sm:w-1/4 shadow-lg"
            >
              Aceptar
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
