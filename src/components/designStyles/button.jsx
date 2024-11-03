import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#00CFFF] text-black px-6 py-2 text-sm font-bold rounded-md cursor-pointer inline-block text-center"
    >
      {text}
    </button>
  );
};

export default Button;
