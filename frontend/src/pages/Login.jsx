import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', formData);
      console.log('Login Response:', res.data); // Debugging
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
        window.location.reload(); // Refresh the page
        
      } else {
        alert('Login failed: No token received.');
      }
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Log In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-2 p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
