import QuestionModel from './model.js';
 
export const createQuestion = (quizId, question) => {
  const newQuestion = { ...question, quiz: quizId };
  newQuestion._id = new mongoose.Types.ObjectId();
  return QuestionModel.create(newQuestion);
}
 
export const deleteQuestion = (questionId) => QuestionModel.deleteOne({ _id: questionId });

 
export const updateQuestion = (questionId, question) => QuestionModel.updateOne({ _id: questionId }, { $set: question });
 
export const findAllQuestionsByQuizId = (qid) => QuestionModel.find({ quiz: qid});

 
// export const findQuestionById = (questionId) => QuestionModel.findById(questionId);
//  export const getQuizDetails = async (quizId) => {
//   const response = await axios.get(`${API_URL}/quizzes/${quizId}`);
//   return response.data;
// };