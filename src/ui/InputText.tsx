
interface inputTextProps {
  id: string,
  type: string,
  placeholder?: string,
  children: React.ReactNode
  value?: string

    
}

const InputText =  ( { id, type,  placeholder, children, value}: inputTextProps) => {

  
  return (
    <>
      <label htmlFor={id}>
        {children}
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
        />
      </label>
    </>
  );
};

export default InputText;
