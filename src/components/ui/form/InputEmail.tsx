import { ChangeEventHandler } from "react";
import InputText from "./InputText";

interface inputEmailProps {
  placeholder: string;
  children: React.ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputEmail = ({ placeholder, children, onChange }: inputEmailProps) => {
  return (
      <InputText 
      id={"email"} 
      type={"email"} 
      children={children} 
      expandText={""}
      onChange={onChange}
      placeholder={placeholder}
      />
   
  );
};

export default InputEmail;
