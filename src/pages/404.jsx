import React from 'react';
import { useNavigate } from 'react-router-dom';
import unicornImage from '../assets/unicornio-para-colorear-cumpleanos-de-ninos-triste-camiseta-mujer-removebg-preview 1.png';

const Error404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 to-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto p-6 space-y-6 md:space-y-0 md:space-x-12">
        
        {/* Unicornio */}
        <div className="flex justify-center md:w-1/2">
          <img src={unicornImage} alt="Sad Unicorn" className="w-72 h-auto" />
        </div>

        {/* Texto 404 */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <p className="text-lg mb-6">
            We are very sorry for the inconvenience. It looks like you’re trying
            to access a page that either has been deleted or never existed.
          </p>
          <button
            onClick={handleBackToHome}
            className="px-6 py-2 border border-white rounded hover:bg-white hover:text-blue-800 transition"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
