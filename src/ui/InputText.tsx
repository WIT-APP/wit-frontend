
interface inputTextProps {
  id: string;
  placeholder: string,
  children: React.ReactNode;
    
}

const InputText =  ( { id, placeholder, children }: inputTextProps) => {

  
  return (
    <>
      <label htmlFor="name">
        {children}
        <input
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
        />
      </label>
    </>
  );
};

export default InputText;
