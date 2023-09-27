import React, { useEffect, useState } from 'react';
import projectData from '../../../data/projectData.json'; // Asegúrate de importar el archivo JSON correcto

const ProjectBio: React.FC = () => {
  const [tituloRespuesta, setTituloRespuesta] = useState<string>('');
  const [bio, setBioRespuesta] = useState<string>('');

  useEffect(() => {
    if (projectData.length >= 3) {
      // Establece la respuesta del tercer elemento en el título
      setTituloRespuesta(projectData[2].respuesta);

      // Establece la respuesta parrafo
      setBioRespuesta(projectData[projectData.length - 7].respuesta);
    }
  }, []);

  return (
    <div className="bg-white-100 p-4">
      <h2 className="text-2xl font-semibold mb-2">{tituloRespuesta}</h2>
      <p>{bio}</p>
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