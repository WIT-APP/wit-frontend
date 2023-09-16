interface inputEmailProps {
  placeholder: string;
  children: React.ReactNode;
}

const InputEmail = ({ placeholder, children }: inputEmailProps) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
        {children}
        <input
          type="email"
          id="email"
          name="email"
          placeholder={placeholder}
          className="mt-2 form-input font-normal w-full px-3 py-2 rounded-radius-050"
        />
      </label>
    </div>
  );
};

export default InputEmail;
