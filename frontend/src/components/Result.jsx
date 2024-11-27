import React, { useEffect, useState } from 'react';
import axios from '../api';

const Result = ({ answers, topic }) => {
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

  if (!result) return <p>Loading results...</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center">Quiz Results</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <p className="text-lg">
          <strong>Score:</strong> {result.score}/{result.total}
        </p>
        <h3 className="text-lg font-semibold mt-4">Suggestions for Improvement:</h3>
        <ul className="list-disc pl-6">
          {result.improvementSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Result;
