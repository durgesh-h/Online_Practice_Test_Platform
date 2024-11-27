import React, { useState } from 'react';
import axios from '../api';
import Quiz from '../components/Quiz';


const Dashboard = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);

  const startQuiz = async () => {
    try {
      const response = await axios.get('/quiz/questions');
      setQuestions(response.data);
      setQuizStarted(true);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {!quizStarted ? (
      <div className="container justify-center pt-40 mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome to Your Dashboard
        </h1>
      
          <div className="flex flex-col items-center">
            <p className="text-lg text-gray-400 mb-4">
              Ready to challenge yourself? Start the quiz now!
            </p>
            <button
              onClick={startQuiz}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-6 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              Start Quiz
            </button>
          </div>
          </div>
        ) : (
          <Quiz questions={questions} />
        )}
   

     
    </div>
  );
};

export default Dashboard;
