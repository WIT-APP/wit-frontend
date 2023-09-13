

function InputSelect() {
  return (
    <>
      <label htmlFor="genero">
        "¿Cómo describirías tu género?"
        <select name="genero" id="genero">
        <option value="" disabled selected hidden>Selecciona una opción</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
          <option value="otro">Otro</option>
          <option value="prefiero_no_identificarme">Prefiero no identificarme</option>
        </select>
      </label>
    </>
  );
}

export default InputSelect;
