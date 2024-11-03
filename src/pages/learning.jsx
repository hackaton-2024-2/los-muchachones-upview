import React from 'react';

const filesData = {
  marketing: Array(3).fill({ title: 'Video de Marketing', image: 'public/assets/learning1.png' }),
  financiero: Array(2).fill({ title: 'Video Financiero', image: 'public/assets/image.png' }),
  legal: Array(3).fill({ title: 'Video Legal', image: 'public/assets/image1.png' }),
  comercial: Array(2).fill({ title: 'Video Comercial', image: 'public/assets/image2.png' }),
};

const Files = () => {
  return (
    <div className="h-screen overflow-y-scroll p-6 bg-gray-900 text-white">
      <div className="max-w-screen-lg mx-auto">
      <h2 className="text-4xl font-bold mb-4">NUESTRAS CAPACITACIONES</h2>

        {Object.keys(filesData).map((section) => (
          <div key={section} className="mb-8">
            <h2 className="text-xl font-bold text-[#00CFFF] mb-4 capitalize">{section}</h2>
            <div className="grid grid-cols-3 gap-4">
              {filesData[section].map((file, index) => (
                <div 
                  key={index} 
                  className="relative w-full pt-[56.25%] bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-600 transition-colors"
                  style={{
                    backgroundImage: `url(${file.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-3xl text-white bg-black bg-opacity-50 rounded-lg">▶️</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Files;
