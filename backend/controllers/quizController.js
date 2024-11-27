const questions = [
  // Arithmetic
  { id: 1, question: 'What is 2 + 2?', difficulty: 1, topic: 'arithmetic', options: ['3', '4', '5', '6'], answer: '4' },
  { id: 2, question: 'What is 5 x 3?', difficulty: 2, topic: 'arithmetic', options: ['10', '15', '20', '25'], answer: '15' },
  { id: 3, question: 'What is 9 - 3?', difficulty: 1, topic: 'arithmetic', options: ['4', '5', '6', '7'], answer: '6' },
  { id: 4, question: 'What is 12 ÷ 4?', difficulty: 1, topic: 'arithmetic', options: ['2', '3', '4', '5'], answer: '3' },

  // Algebra
  { id: 5, question: 'Solve for x: 2x + 3 = 7', difficulty: 2, topic: 'algebra', options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'], answer: 'x = 2' },
  { id: 6, question: 'Simplify: 3x - 5x', difficulty: 1, topic: 'algebra', options: ['-2x', '2x', 'x', '3x'], answer: '-2x' },
  { id: 7, question: 'Solve for x: 5x - 10 = 0', difficulty: 2, topic: 'algebra', options: ['x = 0', 'x = 1', 'x = 2', 'x = 5'], answer: 'x = 2' },
  { id: 8, question: 'What is the value of x in the equation 4x = 20?', difficulty: 2, topic: 'algebra', options: ['x = 4', 'x = 5', 'x = 6', 'x = 7'], answer: 'x = 5' },

  // Geometry
  { id: 9, question: 'What is the area of a rectangle with length 5 and width 2?', difficulty: 2, topic: 'geometry', options: ['10', '12', '15', '20'], answer: '10' },
  { id: 10, question: 'What is the perimeter of a square with side length 4?', difficulty: 1, topic: 'geometry', options: ['12', '16', '20', '24'], answer: '16' },
  { id: 11, question: 'What is the sum of the interior angles of a triangle?', difficulty: 2, topic: 'geometry', options: ['180°', '360°', '90°', '270°'], answer: '180°' },
  { id: 12, question: 'What is the area of a circle with radius 7?', difficulty: 3, topic: 'geometry', options: ['49π', '14π', '7π', '21π'], answer: '49π' },

  // Trigonometry
  { id: 13, question: 'What is sin(90°)?', difficulty: 1, topic: 'trigonometry', options: ['0', '1', '√2/2', '1/2'], answer: '1' },
  { id: 14, question: 'What is cos(0°)?', difficulty: 1, topic: 'trigonometry', options: ['1', '0', '√3/2', '√2/2'], answer: '1' },
  { id: 15, question: 'What is tan(45°)?', difficulty: 2, topic: 'trigonometry', options: ['1', '0', '√3', '∞'], answer: '1' },
  { id: 16, question: 'What is the value of sin(30°)?', difficulty: 2, topic: 'trigonometry', options: ['1/2', '√3/2', '√2/2', '1'], answer: '1/2' },

  // Statistics
  { id: 17, question: 'What is the mean of the numbers 1, 2, 3, 4, 5?', difficulty: 2, topic: 'statistics', options: ['3', '2.5', '4', '5'], answer: '3' },
  { id: 18, question: 'What is the median of the numbers 2, 4, 6, 8, 10?', difficulty: 2, topic: 'statistics', options: ['6', '7', '5', '4'], answer: '6' },
  { id: 19, question: 'What is the mode of the numbers 1, 2, 2, 3, 3, 3, 4?', difficulty: 2, topic: 'statistics', options: ['2', '3', '4', '1'], answer: '3' },

  // Probability
  { id: 20, question: 'What is the probability of rolling a 4 on a six-sided die?', difficulty: 1, topic: 'probability', options: ['1/6', '1/2', '1/4', '1/3'], answer: '1/6' }
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
const improvementSuggestions = correctCount < total * 0.7
? [
    'Focus on weak topics like arithmetic, algebra, and geometry.',
    'Review basic concepts in trigonometry and statistics.',
    'Consider practicing with more challenging problems to improve your skills.',
    'Practice solving problems step by step and revisiting missed questions.'
  ]
: [
    'Great work! Keep practicing to refine your skills.',
    'Consider trying advanced-level questions to further challenge yourself.',
    'Stay consistent with your practice, and aim to strengthen areas like trigonometry.',
    'You are progressing well! Start solving time-bound problems to improve speed.'
  ];
  res.status(200).json({ score: correctCount, total, improvementSuggestions });
};
