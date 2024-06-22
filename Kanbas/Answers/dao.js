
 import mongoose from 'mongoose';
import AnswerModel from './model.js';
 

export const createAnswer = (answer) => {
  return AnswerModel.create(answer);
};

export const updateAnswer = (userId, quizId, questionId, answer) => {
    return AnswerModel.updateOne({ userId: userId, quizId: quizId, questionId: questionId }, { $set: answer });
};

export const fetchAnswer = (userId, quizId, questionId) => {
  return AnswerModel.findOne({ userId: userId, quizId: quizId, questionId: questionId });
};