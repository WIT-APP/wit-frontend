import { ChangeEventHandler } from "react";
import {InputText} from "./InputText";


interface inputEmailProps {
  id: string;
  type: string;
  placeholder?: string;
  children: React.ReactNode;
  value?: string;
  expandText: string;
  additionalClass?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const InputEmail = (
  {
    id,
    type,
    placeholder,
    children,
    value,
    expandText,
    additionalClass,
  }: inputEmailProps
) => {
  additionalClass = 'pl-10'
  return (
    
    <div>
      {/* <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-white">Correo Electronico</label> */}
        <div className="relative">
          <div className="absolute inset-y-12 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-yellow2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
          </div>
          <InputText 
          type={type}
          id={id}
          value={value}
          placeholder={placeholder} 
          children={children} 
          expandText={expandText} 
          additionalClass={` ${additionalClass}`}
          />
        </div>
      </div>
   
  );
};

export default InputEmail;

   
