import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import img from '../assets/img.svg';
const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/signup', formData);
      alert('Signup successful! Please log in.');
      navigate('/');
    } catch (error) {
      alert('Error during signup. Please try again.');
    }
  };

  return (
    <div className="flex px-4 items-center flex-col justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center z-40  animate-pendulum">
        <img
          src={img} // Replace with your logo path
          alt="Logo"
          className="h-16 mx-auto mb-[-1vh] "
        />
      </div>
    <form
      onSubmit={handleSignup}
      className="w-full max-w-md bg-gray-800 shadow-xl rounded-lg p-8 space-y-6 transform transition-all hover:shadow-2xl"
    >
      <div className="text-center">
        
        <h2 className="text-3xl font-extrabold text-gray-200">
          Sign Up
        </h2>
        <p className="text-sm text-gray-400">
          Join us and start your journey today!
        </p>
      </div>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-md shadow-md hover:from-green-700 hover:to-teal-700 transition-all duration-300"
      >
        Sign Up
      </button>
      <div className="text-center text-sm text-gray-400">
        <p>
          Already have an account?{" "}
          <a href="/" className="text-green-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </form>
  </div>
  
  );
};

export default Signup;
