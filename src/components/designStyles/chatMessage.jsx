import React from 'react';

const ChatMessage = ({ text, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full my-1`}>
      <div
        className={`p-3 rounded-xl max-w-xs ${isUser ? 'bg-gray-800 text-white' : 'bg-gray-600 text-white'}`}
        style={{
          borderRadius: isUser ? '20px 20px 0px 20px' : '20px 20px 20px 0px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          marginRight: isUser ? '8px' : '0' // Agrega margen derecho solo para los mensajes del usuario
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
