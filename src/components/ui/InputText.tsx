
interface inputTextProps {
  id: string,
  type: string,
  placeholder?: string,
  children: React.ReactNode
  value?: string
  expandText: string
    
}

const InputText = ({ id, type, placeholder, children, value, expandText }: inputTextProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 mb-2 font-medium ">
        {children} <br />
        <span className="opacity-70 font-normal text-justify">{expandText}</span>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        className="form-input font-normal w-full px-3 py-2 rounded-radius-050"
      />
      
      </label>
    </div>
  );
};

export default InputText;
