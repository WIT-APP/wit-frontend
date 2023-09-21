import { ChangeEventHandler } from "react";

interface inputTextProps {
  id: string;
  type: string;
  placeholder?: string;
  children: React.ReactNode;
  value?: string;
  expandText: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputText = ({
  id,
  type,
  placeholder,
  children,
  value,
  expandText,
  onChange,
}: inputTextProps) => {
  return (
    <div className="mb-4 ">
      <label htmlFor={id} className="block text-gray-700 font-medium mb-3">
        {children} <br />
        <span className="opacity-70 font-normal text-justify mt-2">
          {expandText}
        </span>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-2 form-input font-normal w-full px-3 py-2 rounded-md overflow-x-auto"
        />
      </label>
    </div>
  );
};

export default InputText;
