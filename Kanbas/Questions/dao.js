import QuestionModel from './model.js';
 
export const createQuestion = (quizId, question) => {
  const newQuestion = { ...question, quiz: quizId };
  newQuestion._id = new mongoose.Types.ObjectId();
  return QuestionModel.create(newQuestion);
}
 
export const deleteQuestion = (questionId) => QuestionModel.deleteOne({ _id: questionId });
 
export const updateQuestion = (questionId, question) => QuestionModel.updateOne({ _id: questionId }, { $set: question });
 
export const findAllQuestionsByQuizId = (quizId) => QuestionModel.find({ quiz: quizId });
 
export const findQuestionById = (questionId) => QuestionModel.findById(questionId);
 