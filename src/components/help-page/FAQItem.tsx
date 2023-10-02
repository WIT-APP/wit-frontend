import React, { useEffect, useState } from 'react';
import projectData from '../../data/projectData.json'; // Asegúrate de importar el archivo JSON correcto

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
    <div className='container mx-auto px-4 lg:px-8'>
      <h1 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h1>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer faq-item hover:shadow-lg"
          style={{
            maxHeight: openIndex === index ? '1000px' : 'h-full',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
          }}
        >
          <h2
            className="text-xl font-semibold mb-2 cursor-pointer"
            onClick={() => toggleAnswer(index)}
            style={{
              fontWeight: openIndex === index ? 'bold' : 'normal',
            }}
          >
            {item.pregunta}
          </h2>
          <p
            className={`text-gray-700 ${
              openIndex === index ? 'h-auto opacity-100 visible' : 'h-0 opacity-0 invisible'
            }`}
            style={{
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            {item.respuesta}
          </p>
          {item.nombre === "pregunta 4" && (
            <ul
              className={`list-disc ml-6 mt-2 ${
                openIndex === index ? 'h-auto opacity-100 visible' : 'h-0 opacity-0 invisible'
              }`}
              style={{
                transition: 'max-height 0.5s ease-in-out',
                maxHeight: openIndex === index ? '1000px' : 'h-0',
                overflow: 'hidden',
              }}
            >
              {item.estados.map((estadosItem, estadosIndex) => (
                <li key={estadosIndex}>{estadosItem}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

};
export default FaqItem;
