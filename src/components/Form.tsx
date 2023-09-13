import InputEmail from "../ui/InputEmail";
import InputText from "../ui/InputText";

const Form = () => {
  return (
    <form>
        <InputText id="name" placeholder="Escribe tu nombre y apellidos" children="Nombre y Apellidos" />
        <InputEmail placeholder="Correo electrónico" children="Escribe tu correo electrónico" />



     
    </form>
  );
};

export default Form;
