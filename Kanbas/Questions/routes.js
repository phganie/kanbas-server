import db from '../Database/index.js';

export default function QuestionsRoutes(app) {
  // Create a new question
  app.post('/api/courses/:cid/quizzes/:qid/questions', (req, res) => {
    const { cid, qid } = req.params;
    const newQuestion = {
      ...req.body,
      _id: new Date().getTime().toString(),
      course: cid,
      quiz: qid
    };
    db.questions.push(newQuestion);
    res.status(201).json(newQuestion);
  });

  // Get all questions for a quiz
  app.get('/api/courses/:cid/quizzes/:qid/questions', (req, res) => {
    const { qid } = req.params;
    const questions = db.questions.filter((q) => q.quiz === qid);
    res.json(questions);
  });

  // Get a specific question by ID
  app.get('/api/courses/:cid/quizzes/:qid/questions/:questionId', (req, res) => {
    const { questionId } = req.params;
    const question = db.questions.find((q) => q._id === questionId);
    if (question) {
      res.json(question);
    } else {
      res.sendStatus(404);
    }
  });

  // Update a specific question
  app.put('/api/courses/:cid/quizzes/:qid/questions/:questionId', (req, res) => {
    const { questionId } = req.params;
    const questionIndex = db.questions.findIndex((q) => q._id === questionId);
    if (questionIndex !== -1) {
      db.questions[questionIndex] = {
        ...db.questions[questionIndex],
        ...req.body,
      };
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  });

  // Delete a specific question
  app.delete('/api/courses/:cid/quizzes/:qid/questions/:questionId', (req, res) => {
    const { questionId } = req.params;
    db.questions = db.questions.filter((q) => q._id !== questionId);
    res.sendStatus(200);
  });
}
