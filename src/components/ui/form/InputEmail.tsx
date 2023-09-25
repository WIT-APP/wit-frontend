import {InputText} from "./InputText";


interface inputEmailProps {
  id: string;
  type: string;
  placeholder?: string;
  children: React.ReactNode;
  value?: string;
  required?: boolean;
  expandText: string;
  additionalClass?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputEmail = (
  {
    id,
    type,
    placeholder,
    children,
    value,
    required,
    expandText,
    additionalClass,
    onChange,
  }: inputEmailProps
) => {
  // const [isValid, setIsValid] = useState(true);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [email, setEmail] = useState("");
  // const [match, setMatch]= useState(true);
  // const [errorMessageMatch, setErrorMessageMatch] = useState("");

  // const handleInputChange = (inputValue: string) => {
  //   const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  //    setEmail(inputValue)
  //   if (emailPattern.test(inputValue)) {
  //     setIsValid(true);
  //     setErrorMessage("");
  //     onChange?.(inputValue);
  //   } else if (inputValue === "") {
  //     setIsValid(true);
  //     setErrorMessage("");
  //     onChange?.("");
  //   } else {
  //     setIsValid(false);
  //     setErrorMessage("Formato de correo electronico invalido");
  //     return errorMessage;
  //   } 
  
  // };
    

  // const handleMatchChange = (inputValue: string) => {

  //   if (email === inputValue) {
  //     setMatch(true);
  //     setErrorMessage("");
  //     onChange?.(inputValue);
  //   } else {
  //     setMatch(false);
  //     setErrorMessageMatch("No coincide el correo electronico");
  //     return errorMessageMatch;
  //   } 
  // };


  // const errorClass= `${!isValid }? 'pl-10 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400'`

  // additionalClass = `pl-10 ${!isValid  ? errorClass : ''}`
  return (
    
    <div>
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
          required={required}
          additionalClass={` ${additionalClass}`}
          onChange={onChange}
          />
        </div>
        {/* {!isValid && (
        <p id="email-error" className="text-red-800 font-bold text-sm mt-1" >
        {errorMessage}
      </p>
      )} */}
      <div>
      <div className="relative">
        <div className="absolute inset-y-12 left-0 flex items-center pl-3.5 pointer-events-none">
          <svg className="w-4 h-4 text-yellow2" aria-hidden="true" xmlns="http://www.w3.org/  2000/ svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          </svg>
        </div>
        <InputText
          type={type}
          id={'confirm_email'}
          value={value}
          placeholder={placeholder}
          children={'Confirma tu correo electronico'}
          expandText={expandText}
          additionalClass={` ${additionalClass}`}
          // onInputChange={handleMatchChange}
          />
        </div>
        {/* {!match && (
          <p className="text-red-800 font-bold text-sm mt-1" id="match-error">
            {errorMessageMatch}
          </p>
      )} */}
    </div>
      </div>
      
   
  );
};

export default InputEmail;

   
