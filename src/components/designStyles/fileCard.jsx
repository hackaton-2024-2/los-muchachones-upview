import React from 'react';

const FileCard = ({ title, onClick }) => {
  return (
    <div
      className="w-24 h-24 bg-gray-600 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={onClick}
    >
    </div>
  );
};

export default FileCard;
