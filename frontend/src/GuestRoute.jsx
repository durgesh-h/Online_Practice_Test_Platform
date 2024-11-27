import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const GuestRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />; // Redirect to dashboard if logged in
  }

  return children; // Render children (e.g., Login or Signup) if not authenticated
};

export default GuestRoute;
