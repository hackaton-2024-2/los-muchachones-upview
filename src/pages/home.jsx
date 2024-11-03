import React from 'react';
import Card from '../components/designStyles/card';
import Button from '../components/designStyles/button';



const Home = () => {
  // Función que maneja el clic del botón
  const handleButtonClick = () => {
    alert('Botón de chat clicado');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1F1F1F',
      }}
    >
      <Card>
        <p style={{ color: '#FFFFFF' }}>Aquí puedes chatear con nuestro equipo</p>
        <Button text="Empezar Chat" onClick={handleButtonClick} />
      </Card>
    </div>
  );
};

export default Home;