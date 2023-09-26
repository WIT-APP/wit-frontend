//carga los datos de react query para pasarselos al component form
import { useState } from "react";
import { FormSection } from "../components/FormSection";
import witLogo from "../assets/witLogo.png"
import { useCategoryQuestion } from "../services/CategoryQuestionsForm";


//llamada a la category, personal info recive el metodo que modifica category(state de categorías, custom hook) y el array de datos
const pages = ["Personal", "Sociodemografica", "Academica", "Formacion"];

export const FormPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  /*VALIDACION A COMPLETAR - INICIO*/
  const [formData, setFormData] = useState({
    nombre_apellidos: "",
    correo_electronico: "",
    telefono: "",
    fecha_aplicacion: "",
    programa_cursar:"",
  });
  const [formErrors, setFormErrors] = useState({
    nombre_apellidos: "El dato ingresado no es valido",
    correo_electronico: "El dato ingresado no es valido",
    telefono: "El dato ingresado no es valido",
    fecha_aplicacion: "El dato ingresado no es valido",
    programa_cursar:"El dato ingresado no es valido",
  });
  /*VALIDACION A COMPLETAR - FIN*/


  const { isLoading, isError, error, isFetching, isPreviousData, question } =
    useCategoryQuestion(pages[currentPage]);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNextPage = () => {
    if (!isPreviousData && currentPage < pages.length) {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
    }
  };

  /*VALIDACION A COMPLETAR - INICIO*/
  const validateNombre_apellidos = (value) => {
    if (!value) {
      return "Campo obligatorio";
    }
    return "Dato correcto";
  };

  const validateCorreo_electronico = (value) => {
    if (!value) {
      return "Campo obligatorio";
    }
    return "Dato correcto";
  };

  const handleNombreApellidosChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, nombre_apellidos: value });
    const error = validateNombreApellidos(value);
    setFormErrors({ ...formErrors, nombre_apellidos: error });
  };

  const handleCorreoElectronicoChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, correo_electronico: value });
    const error = validateCorreoElectronico(value);
    setFormErrors({ ...formErrors, correo_electronico: error });
  };

  const onSubmit = () => {
    const nombreApellidosError = validateNombreApellidos(formData.nombre_apellidos);
    const correoElectronicoError = validateCorreoElectronico(formData.correo_electronico
    );

    if (nombreApellidosError || correoElectronicoError) {
      setFormErrors({
        nombre_apellidos: nombreApellidosError,
        correo_electronico: correoElectronicoError,
      });
    } else {
      // No hay errores, realiza la acción de envío del formulario
      // Ejemplo: enviar datos al servidor o realizar alguna acción
    }
  };
  /*VALIDACION A COMPLETAR - FIN*/
  
  return (
    
    <div className=" overflow-hidden flex md:justify-center md:bg-black-transparent md:bg-[url('/background.jpg')] bg-cover bg-no-repeat bg-left bg-fixed md:mb-8 lg:mb-14 lg:mt-0 max-h-screen">
      <div className='w-full container md:w-129 p-4 mx-auto md:mx-12 md:my-14 bg-purpleblue2 rounded bg-gray2 overflow-y-scroll scrollbar-thumb-base'>
      <div className="m-2 flex">
        <img src={witLogo} alt="" />
        <h2 className='text-yellow2 text-xl font-bold mt-6 ml-1'>
          Sección {pages[currentPage]}
        </h2>
      </div>
      
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error?.message}</div>
      ) : (
        <FormSection data={question}/>
      )}
      <div className='flex justify-evenly text-sm mb-4'>
        <button onClick={goToPreviousPage} disabled={currentPage === 0}>
          Previous Page
        </button>{' '}
        <button
          onClick={goToNextPage}
          disabled={isPreviousData || currentPage === pages.length - 1}
        >
          Next Page
        </button>
        <button className='custom-button' onClick={onSubmit} disabled={currentPage !== pages.length - 1}>
          Enviar
        </button>
      </div>
      
      {isFetching ? <span> Loading...</span> : null}{' '}
      </div>
      
    </div>
  )
};
