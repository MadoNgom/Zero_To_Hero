import mongoose, { Schema, Document } from 'mongoose';

interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  duration: number;
}
const courseSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }
});

const Course = mongoose.model<ICourse>('Course', courseSchema);
export default Course;