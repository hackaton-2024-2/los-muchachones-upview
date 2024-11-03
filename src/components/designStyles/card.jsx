import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-10 p-5 rounded-2xl w-72 text-center flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default Card;
