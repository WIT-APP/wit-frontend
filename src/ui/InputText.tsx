
interface inputTextProps {
  id: string,
  type: string,
  placeholder: string,
  children: React.ReactNode
    
}

const InputText =  ( { id, type,  placeholder, children }: inputTextProps) => {

  
  return (
    <>
      <label htmlFor={id}>
        {children}
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
        />
      </label>
    </>
  );
};

export default InputText;
