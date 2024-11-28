import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import img from "../assets/img.svg";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const res = await API.post("/auth/login", formData);
      console.log("Login Response:", res.data); // Debugging
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
        window.location.reload(); // Refresh the page
      } else {
        alert("Login failed: No token received.");
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert("Invalid credentials. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex px-4 items-center flex-col justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 ">
      <div className="text-center z-40 animate-pendulum">
        <img
          src={img} // Replace with your logo path
          alt="Logo"
          className="h-16 mx-auto mb-[-1vh] "
        />
      </div>
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-gray-800 shadow-xl rounded-lg p-8 space-y-6 transform transition-all hover:shadow-2xl"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-200">Sign In</h2>
          <p className="text-sm text-gray-400">
            Welcome back! Please enter your details.
          </p>
        </div>
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
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-md shadow-md hover:from-green-700 hover:to-teal-700 transition-all duration-300 flex justify-center items-center"
          disabled={loading} // Disable button during loading
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
              ></path>
            </svg>
          ) : (
            "Log In"
          )}
        </button>
        <div className="text-center text-sm text-gray-400">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="text-green-500 hover:underline">
              Create Account
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
