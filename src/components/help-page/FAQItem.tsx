import React, { useEffect, useState } from 'react';
import projectData from '../../../data/projectData.json'; // Asegúrate de importar el archivo JSON correcto

const FaqItem: React.FC = () => {
  const [faqData, setFaqData] = useState<any[]>([]);

  useEffect(() => {
    // Filtra los datos para preguntas y respuestas
    const faqs = projectData.filter(item => item.categoria === "faq");
    setFaqData(faqs);
  }, []);

  return (
    <div>
      {faqData.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded p-3 mb-4">
          <h2 className="text-xl font-semibold mb-2">{item.pregunta}</h2>
          <p>{item.respuesta}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqItem;
