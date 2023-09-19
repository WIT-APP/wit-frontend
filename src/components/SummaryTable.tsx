import Code from '../assets/code.svg'
import People from '../assets/🦆 icon _people_.svg'
import Laptop from '../assets/laptop-fix.svg'
import { useAllApplicants } from '../services/AllApplicants';
import { Applicant } from '../interfaces/applicant.interface';

export const SummaryTable = () => {
    const { isLoading, isError, applicant } = useAllApplicants();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  let totalApplicantsPython = 0;
  let totalApplicantsIt = 0;
  const totalNewApplicants = applicant?.length;


  const countPythonPreference = (data: Promise<Applicant[]>) => {
      
    for (const entry of data) {
      const program = entry.programa_cursar;

      //No harcodear
      if (program.includes("Python")) {
        totalApplicantsPython++;
      } else {
        totalApplicantsIt++;
      }
    }
  
    return { totalApplicantsPython, totalApplicantsIt };
  }

  

  if (applicant){
    countPythonPreference(applicant)
    // countState(applicant)
  }
  
  return (
    <section  className='rounded-md shadow w-128 h-150 my-3 p-10 fixed top-[10vh] left-[35vw] right-0 flex flex-column justify-between' >
        
            <div className='flex flex-column justify-between'>
                <img src={People} alt="Icono de contador de personas inscritas" />
                <div className='mx-4 justify-center'>
                  <h1 className='text-green text-2xl font-bold'>{totalNewApplicants}</h1>
                  <h3 className='text-green text-m font-bold align-top'> Nuevos Registros</h3>
                </div>
                
            </div>
            <div className='flex flex-column justify-between'>
                <img src={Code} alt="Icono de contador de personas inscritas al programa de Automatización con phyton " />
                <div className='mx-4'>
                  <h1 className='text-green text-2xl font-bold'>{totalApplicantsPython}</h1>
                  <h3 className='text-green text-m font-bold'>  Nuevos Registros Automatización</h3>
                </div>
            </div>
            <div className='flex flex-column justify-between'>
                <img src={Laptop} alt="Icono de contador de personas inscritas al programa de Soporte IT" />
                <div className='mx-4'>
                  <h1 className='text-green text-2xl font-bold'>{totalApplicantsIt}</h1>
                  <h3 className='text-green text-m font-bold '>  Nuevos Registros Soporte IT</h3>
                </div>
            </div>

    </section>
  )
}
