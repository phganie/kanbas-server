import mongoose from 'mongoose';
 
const answerSchema = new mongoose.Schema({
  quizId: { type: String, required: true },
  userId: { type: String, required: true },
  answer: { type: String, required: true },
  questionId: { type: String, required: true }
}, { collection: 'answers' });
 
export default answerSchema;