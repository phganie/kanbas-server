import mongoose from 'mongoose';
import AnswerModel from './model.js';


export const createAnswer = (questionId, answer) => {
    const newAnswer = {
        questionId: questionId,
        quizId: answer.quizId,
        answers: answer.answer,
        userId: answer.userId
    }
    newAnswer._id = new mongoose.Types.ObjectId();
console.log("CREATE" + newAnswer.answers)

  return AnswerModel.create(newAnswer);
};

export const updateAnswer = (userId, questionId, answer) => {
  return AnswerModel.updateOne(
    { userId, questionId },
    { $set: answer },
    { upsert: true }
  );
};

export const fetchAnswer = (userId, questionId) => {
    
  return AnswerModel.findOne({ userId, questionId });
};

export const fetchAllAnswersForQuiz = (userId, quizId) => {
  return AnswerModel.find({ userId, quizId });
};

// export const fetchAllAnswersForQuiz = (userId, quizId) => {
//   return AnswerModel.find({ userId, quizId });
// };
