import React from 'react';
import Button from '../components/designStyles/button';
import Card from '../components/designStyles/card';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white bg-[#13222E]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/src/assets/Background.png')" }}
      ></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-8">¡Bienvenido a Upview Ventures!</h1>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <Card>
            <p className="mb-4">Revisa o agenda tus citas</p>
            <Button text="Mis Citas" onClick={() => alert('Navegar a Mis Citas')} />
          </Card>
          
          <Card>
            <p className="mb-4">Revisa el estado de tu empresa</p>
            <Button text="Mis Reportes" onClick={() => alert('Navegar a Mis Reportes')} />
          </Card>
          
          <Card>
            <p className="mb-4">Aquí puedes chatear con nuestro equipo</p>
            <Button text="Empezar Chat" onClick={() => alert('Iniciar Chat')} />
          </Card>
          
          <Card>
            <p className="mb-4">Aquí puedes subir tus archivos</p>
            <Button text="Subir Archivos" onClick={() => alert('Subir Archivos')} />
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
