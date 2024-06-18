import * as dao from "./dao.js";
 
export default function QuizzesRoutes(app) {
 
  const createQuiz = async (req, res) => {
    const { cid } = req.params;
    try {
      const quiz = await dao.createQuiz(cid, req.body);
      res.json(quiz);
    } catch (err) {
      res.status(500).send(err);
    }
  }
 
  const deleteQuiz = async (req, res) => {
    try {
      const status = await dao.deleteQuiz(req.params.qid);
      res.json(status);
    } catch (err) {
      res.status(500).send(err);
    }
  }
 
  const findAllQuizzes = async (req, res) => {
    try {
      const quizzes = await dao.findAllQuizzes();
      res.json(quizzes);
    } catch (err) {
      res.status(500).send(err);
    }
  }
 
  const findQuizById = async (req, res) => {
    try {
      const quiz = await dao.findQuizById(req.params.qid);
      if (quiz) {
        res.json(quiz);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
 
  const updateQuiz = async (req, res) => {
    try {
      const status = await dao.updateQuiz(req.params.qid, req.body);
      res.json(status);
    } catch (err) {
      res.status(500).send(err);
    }
  }
 
  const findQuizzesForCourse = async (req, res) => {
    try {
      const { cid } = req.params;
      console.log(`Finding quizzes for course ID: ${cid}`);
      const quizzes = await dao.findQuizzesForCourse(cid);
      res.json(quizzes);
    } catch (err) {
      res.status(500).send(err);
    }
  }
 
  app.post("/api/courses/:cid/quizzes", createQuiz);
  app.delete("/api/quizzes/:qid", deleteQuiz);
  app.get("/api/quizzes", findAllQuizzes);
  app.get("/api/quizzes/:qid", findQuizById);
  app.put("/api/quizzes/:qid", updateQuiz);
  app.get("/api/courses/:cid/quizzes", findQuizzesForCourse);
}