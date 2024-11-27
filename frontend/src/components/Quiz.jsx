import React, { useState } from 'react';
import axios from '../api';
import Result from './Result';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const submitAnswer = async (selectedOption) => {
    const isCorrect = currentQuestion.answer === selectedOption;
    setAnswers([...answers, { questionId: currentQuestion.id, isCorrect }]);

    try {
      const response = await axios.post('/quiz/adaptive-question', {
        answered: answers.map((a) => a.questionId),
      });
      if (response.data) {
        setCurrentQuestion(response.data);
      } else {
        setIsFinished(true);
      }
    } catch (error) {
      console.error('Error fetching next question:', error);
    }
  };

  if (isFinished) {
    return <Result answers={answers} />;
  }

  return (
    <div>
      <h3>Topic: {currentQuestion.topic}</h3>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option, index) => (
        <button key={index} onClick={() => submitAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Quiz;
