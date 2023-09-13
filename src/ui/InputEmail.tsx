interface inputEmailProps {
    placeholder: string,
    children: React.ReactNode;
}

function InputEmail({ placeholder, children }: inputEmailProps ) {

  return (
    <>
      <label htmlFor="email">
        {children}
        <input
          type="email"
          id="email"
          name="email"
          placeholder={placeholder}
        />
      </label>
    </>
  )
}

export default InputEmail