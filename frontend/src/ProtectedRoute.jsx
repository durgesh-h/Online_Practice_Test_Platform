import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />; // Redirect to login if not authenticated
  }

  return children; // Render children (e.g., Dashboard) if authenticated
};

export default ProtectedRoute;
