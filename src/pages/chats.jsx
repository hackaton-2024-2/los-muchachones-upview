import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../components';

const branches = [
  { name: 'Marketing', id: 'marketing', icon: '🛒' },
  { name: 'Financiera', id: 'financiera', icon: '💰' },
  { name: 'Legal', id: 'legal', icon: '⚖️' },
  { name: 'Comercial', id: 'comercial', icon: '🏬' }
];

const initialMessages = {
  marketing: [
    { text: "¡Hola desde Marketing!", isUser: false }
  ],
  financiera: [
    { text: "¡Hola desde Financiera!", isUser: false }
  ],
  legal: [
    { text: "¡Hola desde Legal!", isUser: false }
  ],
  comercial: [
    { text: "¡Hola desde Comercial!", isUser: false }
  ]
};

// Respuestas automáticas predeterminadas
const automatedResponses = [
  "Gracias por tu mensaje. Estamos revisando tu solicitud.",
  "¿En qué más te puedo ayudar?",
  "Si necesitas más información, no dudes en preguntar.",
  "Estamos aquí para ayudarte."
];

const Chats = () => {
  const [selectedBranch, setSelectedBranch] = useState('marketing');
  const [allMessages, setAllMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [responseIndex, setResponseIndex] = useState(0);

  // Especifica que el tipo de messagesEndRef es HTMLDivElement o null
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [allMessages[selectedBranch]]);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setAllMessages(prevMessages => ({
        ...prevMessages,
        [selectedBranch]: [...prevMessages[selectedBranch], { text: input, isUser: true }]
      }));
      setInput('');

      // Inicia un temporizador para enviar una respuesta automática
      setTimeout(() => {
        sendAutomatedResponse();
      }, 1000); // Retraso de 1 segundo para la respuesta
    }
  };

  const sendAutomatedResponse = () => {
    const response = automatedResponses[responseIndex % automatedResponses.length]; // Ciclo infinito de respuestas
    setAllMessages(prevMessages => ({
      ...prevMessages,
      [selectedBranch]: [...prevMessages[selectedBranch], { text: response, isUser: false }]
    }));
    setResponseIndex(responseIndex + 1);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 p-6">
      {/* Barra de selección de ramas */}
      <div className="flex space-x-4 mb-4">
        {branches.map((branch) => (
          <button
            key={branch.id}
            onClick={() => setSelectedBranch(branch.id)}
            className={`flex flex-col items-center p-2 ${selectedBranch === branch.id ? 'text-blue-400' : 'text-gray-400'}`}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${selectedBranch === branch.id ? 'bg-gray-500 shadow-lg shadow-blue-500/50' : 'bg-gray-600'}`}>
              <span className="text-2xl">{branch.icon}</span> {/* Ícono de cada rama */}
            </div>
            <span className={`mt-2 ${selectedBranch === branch.id ? 'font-bold' : ''}`}>{branch.name}</span>
          </button>
        ))}
      </div>

      {/* Contenedor de mensajes */}
      <div
        className="bg-gray-800 p-5 rounded-2xl w-full max-w-lg shadow-lg"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
      >
        <div
          className="space-y-3 overflow-y-auto"
          style={{ maxHeight: '400px' }}
        >
          {allMessages[selectedBranch].map((message, index) => (
            <ChatMessage key={index} text={message.text} isUser={message.isUser} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input para enviar mensajes */}
      <div className="flex items-center w-full max-w-lg mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Chat"
          className="flex-grow p-3 rounded-l-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="p-3 rounded-r-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        >
          ➔
        </button>
      </div>
    </div>
  );
};

export default Chats;
