import React from 'react';
import { FileCard } from '../components';

const filesData = {
  marketing: Array(6).fill({ title: 'Guía de Marketing' }),
  financiero: Array(6).fill({ title: 'Reporte Financiero' }),
  legal: Array(4).fill({ title: 'Documentos Legales' }),
  comercial: Array(4).fill({ title: 'Estrategia Comercial' }),
};

const Files = () => {
  return (
    <div className="p-6 bg-gray-900 text-white h-screen">
      <div className="max-w-screen-lg mx-auto">
        {Object.keys(filesData).map((section) => (
          <div key={section} className="mb-8">
            <h2 className="text-xl font-bold text-blue-400 mb-4 capitalize">{section}</h2>
            <div className="grid grid-cols-3 gap-4">
              {filesData[section].map((file, index) => (
                <FileCard key={index} title={file.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Files;
