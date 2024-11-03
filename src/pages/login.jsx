import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#13222E]">
      {/* Contenedor principal con el fondo */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-5xl p-6">
        
        {/* Formulario de inicio de sesión */}
        <div className="bg-gray-800 rounded-2xl p-8 md:w-1/2 w-full max-w-md z-10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">INICIA SESIÓN</h2>
          
          <form className="flex flex-col space-y-4">
            <label className="text-white text-sm">Correo Electrónico</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border-2 border-cyan-400 rounded-md bg-gray-900 text-white focus:outline-none focus:border-cyan-300"
              placeholder="Correo Electrónico"
            />
            
            <label className="text-white text-sm">Contraseña</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border-2 border-cyan-400 rounded-md bg-gray-900 text-white focus:outline-none focus:border-cyan-300"
              placeholder="Contraseña"
            />
            
            <a href="#" className="text-sm text-gray-400 hover:underline">
              ¿Se te olvidó tu contraseña?
            </a>
            
            <button className="w-full py-2 mt-4 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 transition duration-200">
              Iniciar Sesión
            </button>
          </form>
          
          <p className="mt-4 text-center text-gray-400 text-sm">
            ¿No tienes cuenta? <a href="#" className="text-cyan-400 hover:underline">Regístrate ya</a>
          </p>
        </div>
        
        {/* Decoración del fondo (árboles) */}
        <div className="hidden md:block md:w-1/2">
          <img src="/src/assets/Background2tree.png" alt="Decoración de árboles" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;
