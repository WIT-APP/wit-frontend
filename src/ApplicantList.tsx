import { useAllApplicants } from "./services/AllApplicants";

export const ApplicantList = () => {
    const { isLoading, isError, applicant } = useAllApplicants();

    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error occurred while fetching data.</div>;
    }
  
    return (
      <div>
        <h1>Applicant List</h1>
        <ul>
          {applicant?.map((app) => (
            <ul>
            <li key={app.id}>{app.nombre_apellidos}</li>
            <li key={app.id}>{app.pais_de_nacimiento}</li>
            </ul>
          ))}
        </ul>
      </div>
    );
  };  