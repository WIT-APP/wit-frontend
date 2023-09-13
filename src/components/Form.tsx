import InputEmail from "../ui/InputEmail";
import InputText from "../ui/InputText";

const Form = () => {
  return (
    <form>
        <InputText type="text" id="name" placeholder="Escribe tu nombre y apellidos" children="Nombre y Apellidos" />
        <InputEmail placeholder="Correo electrónico" children="Escribe tu correo electrónico" />
        <InputText type="date" id="date" placeholder="00/00/00" children="Fecha de nacimiento"  />
        <InputText type="number" id="phone" placeholder="Número de teléfono" children="Nombre y Apellidos" />



     
    </form>
  );
};

export default Form;
