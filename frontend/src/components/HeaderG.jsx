import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const HeaderG = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="w-full bg-gray-900 shadow-md text-white py-3 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo or Brand Name */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
            Q
          </div>
          <h1 className="text-2xl font-semibold">Quizify</h1>
        </div>
      </div>
    </header>
  );
};

export default HeaderG;
