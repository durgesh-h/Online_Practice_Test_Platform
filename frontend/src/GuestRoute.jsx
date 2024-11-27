import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const GuestRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default GuestRoute;
