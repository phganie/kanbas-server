import db from "../Database/index.js";

export default function QuizzesRoutes(app) {
  app.delete("/api/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    db.quizzes = db.quizzes.filter((q) => q.id !== qid);
    res.sendStatus(200);
  });

  app.post("/api/courses/:cid/quizzes", (req, res) => {
    const { qid } = req.params;
    const newQuiz = {
      ...req.body,
      quizzes: qid,
      id: new Date().getTime().toString(),
    };
    db.quizzes.push(newQuiz);
    res.send(newQuiz);
  });

  app.get("/api/courses/:cid/quizzes", (req, res) => {
    const { qid } = req.params;
    const quizzes = db.quizzes.filter((a) => a.course === qid);
    res.json(quizzes);
  });

  app.get("/api/courses/:cid/quizzes/:qid", (req, res) => {
    const { cid, qid } = req.params;
    const quizz = db.quizzes.find((q) => q.id === qid && a.course === cid);
    if (quizz) {
      res.json(quizz);
    } else {
      res.sendStatus(404);
    }
  });

  app.put("/api/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    const quizzIndex = db.quizzes.findIndex((q) => q.id === qid);
    if (quizzIndex !== -1) {
      db.quizzes[quizzIndex] = {
        ...db.quizzes[quizzIndex],
        ...req.body,
      };
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  });
}
