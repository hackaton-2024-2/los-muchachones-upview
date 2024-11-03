import React from 'react';

const Button = ({ text, onClick }) => {
  const buttonStyle = {
    backgroundColor: '#00CFFF', 
    color: '#000', 
    padding: '10px 30px',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;