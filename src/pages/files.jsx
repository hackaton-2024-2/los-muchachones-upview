import React, { useState, useRef } from 'react';

const AdButton = ({ fileName, onAddFile, onDelete }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onAddFile(file.name);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full max-w-xs h-32 bg-gray-700 rounded-2xl text-cyan-400 mt-4 border-4 border-cyan-400 shadow-lg">
      {fileName ? (
        <>
          <span className="mt-2 text-sm font-semibold">{fileName}</span>
          <button
            className="absolute bottom-2 right-2 text-red-500 text-xl"
            onClick={() => onDelete(fileName)}
          >
            🗑️
          </button>
        </>
      ) : (
        <>
          <div className="text-2xl cursor-pointer" onClick={handleButtonClick}>+</div>
          <span className="mt-2 text-sm font-semibold">Agregar archivo</span>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  );
};

const AccordionItem = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState([]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const addFile = (fileName) => {
    setFiles([...files, fileName]);
  };

  const deleteFile = (fileName) => {
    setFiles(files.filter(file => file !== fileName));
  };

  return (
    <div className="mb-3">
      <button
        className={`flex justify-between items-center w-full bg-gray-700 text-cyan-400 py-4 px-6 font-bold rounded-lg transition-colors duration-300 ${
          isOpen ? 'bg-gray-600' : ''
        }`}
        onClick={toggleAccordion}
      >
        <span className="flex-grow text-center">{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="bg-gray-700 text-white py-4 px-6 rounded-lg mt-1 max-h-60 overflow-y-auto">
          <p>Contenido de la sección {title}</p>
          <div className="flex flex-row gap-4 flex-wrap">
            {files.map((fileName, index) => (
              <AdButton key={index} fileName={fileName} onAddFile={addFile} onDelete={deleteFile} />
            ))}
            <AdButton onAddFile={addFile} />
          </div>
        </div>
      )}
    </div>
  );
};

const Files = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg w-full h-screen overflow-y-scroll">
      <AccordionItem title="MARKETING" />
      <AccordionItem title="FINANCIERO" />
      <AccordionItem title="LEGAL" />
      <AccordionItem title="COMERCIAL" />
    </div>
  );
};

export default Files;
