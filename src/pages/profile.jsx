import React from "react";

const UserProfile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#13222E]">
      <div className="bg-[#1F2F3D] shadow-lg rounded-lg p-8 max-w-md w-full">
        {/* Foto de perfil */}
        <div className="flex flex-col items-center">
          <img
            src="public/assets/profile.png"
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full shadow-lg mb-4"
          />
          <h2 className="text-2xl font-semibold text-white">Alexa Romero</h2>
          <p className="text-cyan-400 mb-6">Comercial ejecutiva</p>
        </div>

        {/* Información del usuario */}
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-gray-400 font-medium w-28">Correo:</span>
            <span className="text-white">alexaromero@gmail.com</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 font-medium w-28">Teléfono:</span>
            <span className="text-white">+57 312 456 789</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 font-medium w-28">Ubicación:</span>
            <span className="text-white">Bogotá, Colombia</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 font-medium w-28">Fecha de nacimiento:</span>
            <span className="text-white">20 de junio de 2000</span>
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-gray-400 font-medium">Biografía:</span>
            <p className="text-white mt-2">
              Desarrolladora apasionada por la tecnología y el aprendizaje continuo. Con experiencia en proyectos
              de frontend y backend, amante de los retos y la innovación.
            </p>
          </div>
        </div>

        {/* Botón de edición de perfil */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#00A5E3] text-white px-4 py-2 rounded-lg hover:bg-cyan-500 transition duration-200">
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
