import React, { useEffect, useState } from 'react';
import axios from '../api';
import { motion } from 'framer-motion'; // For animation

const Result = ({ answers }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios.post('/quiz/evaluate-results', { answers });
        setResult(response.data);
      } catch (error) {
        console.error('Error evaluating results:', error);
      }
    };

    fetchResult();
  }, [answers]);

  if (!result) return <p className="text-center text-xl">Loading results...</p>;

  const scorePercentage = (result.score / result.total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-6 py-8">
    {/* Main Container with Glassmorphism */}
    <motion.div
      className="bg-gray-700 bg-opacity-30 backdrop-blur-lg shadow-lg rounded-xl p-8 max-w-lg w-full"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center text-white mb-6">Quiz Results</h1>

      {/* Score Section */}
      <div className="text-center text-white mb-6">
        <p className="text-lg font-semibold">
          <span className="text-xl">Score: </span>
          {result.score}/{result.total}
        </p>
        <div className="mt-4 w-full bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full"
            style={{ width: `${scorePercentage}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1">{scorePercentage.toFixed(0)}% Completed</p>
      </div>

      {/* Suggestions */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Suggestions for Improvement:</h3>
        <ul className="list-disc pl-6 space-y-2">
          {result.improvementSuggestions.map((suggestion, index) => (
            <motion.li
              key={index}
              className="text-lg text-gray-200"
              whileHover={{ scale: 1.05, color: '#5A67D8' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {suggestion}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="mt-6 flex justify-center">
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition duration-200"
          onClick={() => window.location.reload()} // Reload to restart the quiz
        >
          Restart Quiz
        </button>
      </div>
    </motion.div>
  </div>
  );
};

export default Result;
