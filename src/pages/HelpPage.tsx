import React from 'react';
import ProjectBio from '../components/help-page/ProjectBio';
import FAQItem from '../components/help-page/FAQItem';
import witLogo from '../assets/witLogo.png';

const FAQPage: React.FC = () => {
  
  return (
    <div className='overflow-hidden flex max-h-screen'>
      <div className='container overflow-y-scroll scrollbar-thumb-base'>
        <ProjectBio />
        <div className="my-6">
          <FAQItem />
        </div>
        <div className="text-center">
          <img src={witLogo} alt="Work in Tech Logo" className="mx-auto my-4" />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
