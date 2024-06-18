import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: { type: String},
  type: { type: String, enum: ['multiple choice', 'true/false', 'short answer'], required: true }
});

const quizzesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  course: { type: String, required: true },
  module: { type: String, required: true },
  description: { type: String, required: true },
  questions: [questionSchema]
}, { collection: 'quizzes' });

export default quizzesSchema;
