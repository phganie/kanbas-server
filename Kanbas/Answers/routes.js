import * as dao from './answers.dao.js';
 
export default function AnswerRoutes(app) {
 
  const createAnswer = async (req, res) => {
    try {
      const answer = await dao.createAnswer(req.body);
      res.json(answer);
    } catch (error) {
      res.status(500).send(error);
    }
  };
 
  const updateAnswer = async (req, res) => {
    try {
      const { userId, quizId, questionId } = req.params;
      const status = await dao.updateAnswer(userId, quizId, questionId, req.body);
      res.json(status);
    } catch (error) {
      res.status(500).send(error);
    }
  };
 
  const fetchAnswer = async (req, res) => {
    try {
      const { userId, quizId, questionId } = req.params;
      const answer = await dao.fetchAnswer(userId, quizId, questionId);
      res.json(answer);
    } catch (error) {
      res.status(500).send(error);
    }
  };
 
  app.post('/api/answers', createAnswer);
  app.put('/api/answers/:userId/:quizId/:questionId', updateAnswer);
  app.get('/api/answers/:userId/:quizId/:questionId', fetchAnswer);
}
 
