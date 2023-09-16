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
      <label htmlFor={id} className="block text-gray-700 mb-2 font-medium ">
        {children} <br />
        <span className="opacity-70 font-normal text-justify">
          {expandText}
        </span>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-2 form-input font-normal w-full px-3 py-2 rounded-radius-050"
        />
      </label>
    </div>
  );
};

export default InputText;
