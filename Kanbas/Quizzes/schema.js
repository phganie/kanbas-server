import mongoose from "mongoose";
import questionSchema from "../questions/schema.js";
const quizzesSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    quizType: {
      type: String,
      enum: [
        "GRADED_QUIZ",
        "PRACTICE_QUIZ",
        "GRADED_SURVEY",
        "UNGRADED_SURVEY",
      ],
      default: "GRADED_QUIZ",
    },
    assignmentGroup: {
      type: String,
      enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
      default: "QUIZZES",
    },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttemps: { type: Boolean, default: false },
    showCorrectAnswers: {
      type: Boolean,
      default: false,
    },
    accessCode: { type: String, default: "" },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    published: { type: Boolean, default: false },
    dueDate: { type: Date, required: true },
    availableDate: { type: Date, required: true },
    untilDate: { type: Date, required: true },
    points: { type: Number, default: 0 },
    numQuestions: { type: Number, default: 0 },
    course: { type: String, required: true },
    questions: [questionSchema],
  },
  { collection: "quizzes" }
);
export default quizzesSchema;