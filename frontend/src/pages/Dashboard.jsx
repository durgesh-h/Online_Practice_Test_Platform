import React, { useState } from 'react';
import axios from '../api';
import Quiz from '../components/Quiz';
import Header from '../components/Header';
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
    <div>
      <Header/>
      <h1>Welcome to Dashboard</h1>
      {!quizStarted ? (
        <button onClick={startQuiz}>Start Quiz</button>
      ) : (
        <Quiz questions={questions} />
      )}
    </div>
  );
};

export default Dashboard;
