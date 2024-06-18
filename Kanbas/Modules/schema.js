import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
  name: { type: String, default: "Lesson" },
  description: { type: String, default: "Lesson Description" },
  module: { type: String },
});
 
const moduleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, },
    course: { type: String, },
    lessons: { type: [lessonSchema], required: false, default: [] },
  },
  { collection: "modules" },
);
export default moduleSchema;