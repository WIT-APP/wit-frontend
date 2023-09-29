import React, { useEffect, useState } from 'react';
import projectData from '../../../data/projectData.json'; // Asegúrate de importar el archivo JSON correcto

const ProjectBio: React.FC = () => {
  const [tituloRespuesta, setTituloRespuesta] = useState<string>('');
  const [bio, setBioRespuesta] = useState<string>('');
  const [WorkintechRespuesta, setWorkintechRespuesta] = useState<string>('');

  useEffect(() => {
    if (projectData.length >= 3) {
      // Establece la respuesta del tercer elemento en el título
      setTituloRespuesta(projectData[2].respuesta);

      // Establece la respuesta párrafo
      setBioRespuesta(projectData[projectData.length - 7].respuesta);

      setWorkintechRespuesta(projectData[2].nombre);
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">{WorkintechRespuesta}</h2>
      <h2 className="text-3xl font-bold mb-4">{tituloRespuesta}</h2>
      <p className="text-gray-700 text-lg">{bio}</p>
    </div>
  );
};

export default ProjectBio;



/* json:
{
  {
    nombre:'titulo',
  categoria:'titulo',
  contenido:'mi aplicacion',
  respuesta: ''
  },
  {
    nombre:'parrafo principal',
  categoria:'parrafo',
  contenido:'es muy bonita',
  respuesta: ''
  },
  {
    nombre:'parrafo secundario',
  categoria:'parrafo',
  contenido:'funciona bien',
  respuesta: ''
  },
  {
    pregunta:'pregunta 1'
    categoria: 'pregunta'
    contenido: 'Cual es tu nombre?'
    respuesta: 'tito'
  }
}

json.map(objeto)=>{
  if objeto.categoria === titutlo {
    <h1 className='m-10 flex content-center'>{objeto.contenido}</h1>
  }
  if objeto.categoria === parrafo {
    <p>{objeto.contenido}</p>
  }
} */