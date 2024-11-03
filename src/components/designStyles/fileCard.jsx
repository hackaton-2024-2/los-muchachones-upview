import React from 'react';
import learningImage from 'src\assets\learning1.png';

const FileCard = ({ title, onClick }) => {
  return (
    <div
      className="w-24 h-24 bg-gray-600 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <img src={learningImage} alt={title} className="object-cover w-full h-full" />
    </div>
  );
};

export default FileCard;
