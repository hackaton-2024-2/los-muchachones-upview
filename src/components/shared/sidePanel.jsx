import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#13222E] text-white w-[250px] h-[100vh] flex flex-col items-center py-5">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10 cursor-pointer" onClick={() => navigate('/')}>
        <img src="/assets/Logo_upview.png" alt="Logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold">
          <span className="text-[#16D2FC]">UP</span>VIEW
        </h1>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-8 text-lg">
        <div onClick={() => navigate('/chats')} className="flex items-center gap-4 cursor-pointer hover:bg-[#16D2FC1a] p-2 rounded-md transition duration-200 ease-in-out">
          <img src="/assets/chat.png" alt="Chat Icon" className="w-6 h-6" />
          <span>Chat</span>
        </div>
        <div onClick={() => navigate('/calendar')} className="flex items-center gap-4 cursor-pointer hover:bg-[#16D2FC1a] p-2 rounded-md transition duration-200 ease-in-out">
          <img src="/assets/calendar.png" alt="Calendario Icon" className="w-6 h-6" />
          <span>Calendario</span>
        </div>
        <div onClick={() => navigate('/learning')} className="flex items-center gap-4 cursor-pointer hover:bg-[#16D2FC1a] p-2 rounded-md transition duration-200 ease-in-out">
          <img src="/assets/playbutton.png" alt="Cursos Icon" className="w-6 h-6" />
          <span>Cursos</span>
        </div>
        <div onClick={() => navigate('/files')} className="flex items-center gap-4 cursor-pointer hover:bg-[#16D2FC1a] p-2 rounded-md transition duration-200 ease-in-out">
          <img src="/assets/folder.png" alt="Archivos Icon" className="w-6 h-6" />
          <span>Archivos</span>
        </div>
        <div onClick={() => navigate('/reports')} className="flex items-center gap-4 cursor-pointer hover:bg-[#16D2FC1a] p-2 rounded-md transition duration-200 ease-in-out">
          <img src="/assets/file.png" alt="Reportes Icon" className="w-6 h-6" />
          <span>Reportes</span>
        </div>
      </div>

      {/* User Info */}
      <div className="mt-auto flex flex-col items-center mb-5">
        <div className="flex items-center gap-2">
          <img
            src="public\assets\profile.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span onClick={() => navigate('/profile')} className="text-lg font-semibold hover:underline cursor-pointer" >Alexa Romero</span>
        </div>
      </div >
    </div >
  );
};

const SidePanel = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default SidePanel;
