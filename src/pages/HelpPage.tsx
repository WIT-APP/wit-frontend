import React from 'react';
import ProjectBio from '../components/help-page/ProjectBio'; // Asegúrate de importar correctamente el componente ProjectBio
import FAQItem from '../components/help-page/FAQItem';

const FAQPage: React.FC = () => {
  
  return (
    <div>
      <ProjectBio /> {/* Renderiza el componente ProjectBio aquí */}
      <h1 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h1>
      <FAQItem />
    </div>
  );
};

export default FAQPage;
