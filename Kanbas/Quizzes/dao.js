import QuizModel from './model.js';
 
export const createQuiz = (courseId, quiz) => {
  const newQuiz = { ...quiz, course: courseId };
  newQuiz._id = new mongoose.Types.ObjectId();
  return QuizModel.create(newQuiz);
}
 
export const findAllQuizzes = () => QuizModel.find();
 
export const findQuizById = (quizId) => QuizModel.findById(quizId);
 
export const updateQuiz = (quizId, quiz) => QuizModel.updateOne({ _id: quizId }, { $set: quiz });
 
export const deleteQuiz = (quizId) => QuizModel.deleteOne({ _id: quizId });
 
export const findQuizzesForCourse = (courseId) => QuizModel.find({ course: courseId });