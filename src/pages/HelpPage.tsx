import React from 'react';
import ProjectBio from '../components/help-page/ProjectBio'; // Asegúrate de importar correctamente el componente ProjectBio
import FAQItem from '../components/help-page/FAQItem';

const FAQPage: React.FC = () => {
  
  return (
    <div className='overflow-hidden flex max-h-screen'>
      <div className='container overflow-y-scroll scrollbar-thumb-base'>
        <ProjectBio />
        <div className="my-6"> {/* Agregamos margen vertical aquí */}
          <FAQItem />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
