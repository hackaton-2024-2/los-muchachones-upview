import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/designStyles/button';
import Card from '../components/designStyles/card';
import { routes } from '../utils/';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white bg-[#13222E]">
      {/* Fondo con opacidad */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/src/assets/Background.png')" }}
      ></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-8">¡Bienvenido a Upview Ventures!</h1>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Botones que navegan a las rutas correspondientes */}
          <Card>
            <p className="mb-4">Revisa o agenda tus citas</p>
            <Button text="Mis Citas" onClick={() => navigate(routes.calendar.path)} />
          </Card>
          
          <Card>
            <p className="mb-4">Revisa el estado de tu empresa</p>
            <Button text="Mis Reportes" onClick={() => navigate(routes.reports.path)} />
          </Card>
          
          <Card>
            <p className="mb-4">Aquí puedes chatear con nuestro equipo</p>
            <Button text="Empezar Chat" onClick={() => navigate(routes.chats.path)} />
          </Card>
          
          <Card>
            <p className="mb-4">Aquí puedes subir tus archivos</p>
            <Button text="Subir Archivos" onClick={() => navigate(routes.files.path)} />
          </Card>
        </div>
        
        <p className="text-lg text-center px-4">
          Aprovecha estos recursos para impulsar tu emprendimiento.
        </p>
      </div>
    </div>
  );
};

export default Home;
