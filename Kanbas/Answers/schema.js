import mongoose from 'mongoose';
 
const answerSchema = new mongoose.Schema({
 quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: { type: Map, of: String, required: true },
  score: { type: Number, required: true },
  attemptNumber: { type: Number, required: true },
  submittedAt: { type: Date, default: Date.now }
}, { collection: 'submissions' });
export default answerSchema;