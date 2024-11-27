const express = require('express');
const protect = require('../middleware/protect');
const Question = require('../models/Question');

const router = express.Router();

const { getQuestions, getAdaptiveQuestions, evaluateResults } = require('../controllers/quizController');

router.get('/questions', getQuestions);
router.post('/adaptive-question', getAdaptiveQuestions);
router.post('/evaluate-results', evaluateResults);


module.exports = router;
