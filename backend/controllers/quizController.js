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
  const remaining = questions.filter((q) => !answered.includes(q.id));

  const nextQuestion = remaining.sort((a, b) => a.weight - b.weight)[0];
  res.status(200).json(nextQuestion || null);
};

exports.evaluateResults = (req, res) => {
  const { answers } = req.body;

  const correctCount = answers.filter((a) => a.isCorrect).length;
  const total = answers.length;

  const improvementSuggestions = correctCount < total * 0.7 
    ? ['Focus on weak topics like...', 'Practice more on geometry...'] 
    : ['Great work! Keep practicing.'];

  res.status(200).json({ score: correctCount, total, improvementSuggestions });
};
