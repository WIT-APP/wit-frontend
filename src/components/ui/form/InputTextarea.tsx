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
    <div className="mt-4">
      <label htmlFor={id} className="block text-white font-medium mb-3">
        {children} <br />
        <span className="opacity-70 font-normal text-justify mt-2">
          {expandText}
        </span>
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-2 form-input font-normal w-full px-3 py-2 overflow-x-auto rounded-md"
        ></textarea>
      </label>
    </div>
  );
};

export default InputTextarea;
