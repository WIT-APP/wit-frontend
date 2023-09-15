interface inputEmailProps {
    placeholder: string,
    children: React.ReactNode;
}

const InputEmail = ({ placeholder, children }: inputEmailProps) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
        {children}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder={placeholder}
        className="form-input font-normal w-full px-3 py-2 rounded-radius-050"
      />
    </div>
  );
};

export default InputEmail