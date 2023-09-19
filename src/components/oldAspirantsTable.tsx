import { useAllApplicants } from '../services/AllApplicants';

// import { InputCheckbox } from "../ui/InputCheckbox"

export const ApplicantsTable = () => {
  const { isLoading, isError, applicant } = useAllApplicants();
  console.log(applicant)
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  

  return (
    <section className='rounded-md shadow w-128 my-3 p-2 fixed top-[30vh] left-[35vw] right-0 h-128 '>
      <div className='flex flex-column justify-between'>
        <div>
          <h1 className='text-black text-xl font-bold mx-3 mt-4'>Todos los Nuevos Aspirantes</h1>
          <h3 className='text-green text-m font-bold mx-3 mb-3'>Pre-aprobados</h3>
        </div>
        <button className='mr-12 bg-blue rounded text-white custom-button'>Exportar</button>
      </div>
      
      <table className='table-auto mx-4'>
        <thead>
          <tr className='border-b text-gray text-m text-left'>
            <th className='px-4 py-2'><input type='checkbox' /></th>
            <th className='px-4 py-2'>Fecha de Aplicación</th>
            <th className='px-15 py-2 '>Nombre Completo</th>
            <th className='px-15 py-2 '>Correo</th>
            <th className='px-4 py-2'>Telefono</th>
          </tr>
        </thead>
        <tbody >
          {applicant?.map((aspirant) => (
            <tr key={aspirant.nombre_apellidos} className='border-b border-gray-300 text-sm '>              
              <td className='px-4 py-2 '><input type='checkbox'/></td>
              <td className='px-4 py-2'>12/08/2020</td>
              {/* <td>{aspirant.fecha_aplicacion.toLocaleString()}</td> */}
              <td className='px-15 py-2'>{aspirant.nombre_apellidos}</td>
              <td className='px-15 py-2'>{aspirant.correo_electronico}</td>
              <td className='px-4 py-2'>{aspirant.telefono}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
