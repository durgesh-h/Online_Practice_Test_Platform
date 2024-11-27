import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="w-full p-4 bg-gray-500 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Quiz Platform</h1>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded-full">
        Logout
      </button>
    </div>
  );
};

export default Header;
