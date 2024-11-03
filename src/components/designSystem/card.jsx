import React from 'react';

const Card = ({ children }) => {
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo gris claro con opacidad
    padding: '20px',
    borderRadius: '20px', // Bordes redondeados
    width: '300px', // Ancho de la tarjeta
    textAlign: 'center', // Centrado del contenido
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
