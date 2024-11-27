import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
const AuthContext = createContext();

// AuthProvider to wrap the app and provide context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if there's a token in localStorage (or wherever you store it)
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token }); // Set user info based on token, or call an API to get user info
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to access auth context
export const useAuth = () => useContext(AuthContext);
