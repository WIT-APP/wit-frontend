import React, { useEffect, useState } from 'react';
import projectData from '../../data/projectData.json'; // Asegúrate de importar el archivo JSON correcto

const ProjectBio: React.FC = () => {
  const [tituloRespuesta, setTituloRespuesta] = useState<string>('');
  const [bio, setBioRespuesta] = useState<string>('');
  const [WorkintechRespuesta, setWorkintechRespuesta] = useState<string>('');

  useEffect(() => {
    if (projectData.length >= 3) {
      // Establece la respuesta del tercer elemento en el título
      setTituloRespuesta(projectData[2].respuesta);

      // Establece la respuesta párrafo
      setBioRespuesta(projectData[projectData.length - 6].respuesta);

      setWorkintechRespuesta(projectData[2].nombre);
    }
  }, []);

  // Divide el texto de WorkintechRespuesta en palabras
  const words = WorkintechRespuesta.split(' ');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        {words.map((word, index) => (
          <span
            key={index}
            style={{
              color:
                index === 0
                  ? '#517BBD' // Primer palabra
                  : index === 1
                  ? '#1B9966' // Segunda palabra
                  : index === 2
                  ? '#F4B40E' // Tercera palabra
                  : getRandomColor(), // Resto de las palabras
            }}
          >
            {word}{' '}
          </span>
        ))}
      </h2>
      <h2 className="text-3xl font-bold mb-4">{tituloRespuesta}</h2>
      <p className="text-gray-700 text-md">{bio}</p>
    </div>
  );
};

// Función para obtener un color aleatorio
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default ProjectBio;
