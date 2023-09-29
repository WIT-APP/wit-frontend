import React, { useEffect, useState } from 'react';
import projectData from '../../../data/projectData.json'; // Asegúrate de importar el archivo JSON correcto

const FaqItem: React.FC = () => {
  const [faqData, setFaqData] = useState<any[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Filtra los datos para preguntas y respuestas
    const faqs = projectData.filter(item => item.categoria === "faq");
    setFaqData(faqs);
  }, []);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='container'>
      <h1 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h1>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer faq-item"
          style={{
            maxHeight: openIndex === index ? '1000px' : '60px', // Cambia aquí el valor de la altura máxima
            overflow: 'hidden',
            animation: openIndex === index ? 'fadeIn 0.5s ease-in-out' : '',
          }}
        >
          <h2
            className="text-xl font-semibold mb-2"
            onClick={() => toggleAnswer(index)}
            style={{
              fontWeight: openIndex === index ? 'bold' : 'normal',
            }}
          >
            {item.pregunta}
          </h2>
          <p
            className="text-gray-700"
            style={{
              opacity: openIndex === index ? 1 : 0,
              visibility: openIndex === index ? 'visible' : 'hidden',
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            {item.respuesta}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FaqItem;

