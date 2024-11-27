const questions = [
  { id: 1, question: 'What is 2 + 2?', difficulty: 1, topic: 'arithmetic', options: ['3', '4', '5'], answer: '4' },
  { id: 2, question: 'What is 5 x 3?', difficulty: 2, topic: 'arithmetic', options: ['10', '15', '20'], answer: '15' },
  // Add more questions here
];

exports.getQuestions = (req, res) => {
  res.status(200).json(questions);
};

exports.getAdaptiveQuestions = (req, res) => {
  const answered = req.body.answered || [];

  // Filter out answered questions
  const remaining = questions.filter((q) => !answered.includes(q.id));

  // Get the next question (take the first question from the remaining)
  const nextQuestion = remaining[0]; // No need to sort if weights aren't defined

  res.status(200).json(nextQuestion || null); // Return null if no questions remain
};

exports.evaluateResults = (req, res) => {
  const { answers } = req.body;

  // Calculate score
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const total = answers.length;

  // Provide suggestions based on score
  const improvementSuggestions =
    correctCount < total * 0.7
      ? ['Focus on weak topics like arithmetic.', 'Practice more challenging problems.']
      : ['Great work! Keep practicing.'];

  res.status(200).json({ score: correctCount, total, improvementSuggestions });
};
