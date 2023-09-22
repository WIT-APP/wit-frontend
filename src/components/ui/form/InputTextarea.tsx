import { ChangeEventHandler } from "react";

interface inputTextProps {
  id: string;
  placeholder?: string;
  children: React.ReactNode;
  value?: string;
  expandText?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

const InputTextarea = ({
  id,
  placeholder,
  children,
  value,
  expandText,
  onChange,
}: inputTextProps) => {
  return (
    <div className="mt-2">
      <label htmlFor={id} className="block text-white font-medium mb-2">
        {children} <br />
        <span className="opacity-70 font-normal text-justify mt-2">
          {expandText}
        </span>
      </label>
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-2 form-textarea text-sm w-full px-3 py-2 overflow-x-auto rounded-md"
        ></textarea>
      </div>
  );
};

export default InputTextarea;
