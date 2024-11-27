import React, { useState } from "react";
import axios from "../api";
import Result from "./Result";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  const submitAnswer = async (selectedOption) => {
    const isCorrect = currentQuestion.answer === selectedOption;
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { questionId: currentQuestion.id, isCorrect },
    ]);
  
    try {
      const response = await axios.post("/quiz/adaptive-question", {
        answered: [...answers.map((a) => a.questionId), currentQuestion.id], // Include current question in answered list
      });
  
      if (response.data) {
        setCurrentQuestion(response.data); // Load next question
      } else {
        setIsFinished(true); // No more questions left
      }
    } catch (error) {
      console.error("Error fetching next question:", error);
    }
  };
  

  if (isFinished) {
    return <Result answers={answers} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-6 py-8">
    {/* Main Container */}
    <div className="w-full max-w-3xl bg-opacity-50 backdrop-blur-lg bg-gray-700 shadow-lg rounded-lg p-6">
      {/* Header Section */}
      <div className="border-b pb-4 mb-6">
        <h3 className="text-sm text-gray-300 font-semibold mb-1 uppercase">
          Topic: {currentQuestion.topic}
        </h3>
        <h2 className="text-xl md:text-2xl font-bold text-white">
          {currentQuestion.question}
        </h2>
      </div>
  
      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`w-full py-3 px-4 rounded-lg text-left border transition-all duration-200
              ${
                selectedOption === option
                  ? " bg-gradient-to-r from-purple-600 to-blue-500 text-white border-gray-800"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
  
      {/* Submit Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => submitAnswer(selectedOption)}
          disabled={!selectedOption} // Disable button if no option is selected
          className={`px-6 py-3 text-white rounded-lg font-semibold ${
            selectedOption
              ? "bg-blue-600 hover:bg-purple-700"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          Submit Answer
        </button>
      </div>
  
      {/* Progress Section */}
      <div className="mt-4 text-gray-300 text-sm flex items-center justify-between">
        <span>
          Question {answers.length + 1} of {questions.length}
        </span>
      </div>
    </div>
  </div>
  
  
  );
};

export default Quiz;
