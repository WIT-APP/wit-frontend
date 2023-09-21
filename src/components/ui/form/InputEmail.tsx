import { ChangeEventHandler } from "react";

interface inputEmailProps {
  placeholder: string;
  children: React.ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputEmail = ({ placeholder, children, onChange }: inputEmailProps) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 font-medium mb-3">
        {children}
        <input
          type="email"
          id="correo_electronico"
          name="correo_electronico"
          onChange={onChange}
          placeholder={placeholder}
          className="mt-2 form-input font-normal w-full px-3 py-2 rounded-md"
        />
      </label>
    </div>
  );
};

export default InputEmail;
