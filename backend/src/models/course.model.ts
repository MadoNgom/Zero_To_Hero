import mongoose, { Schema, Document } from 'mongoose';
import { IModule } from './module.model';

export interface ICourse extends Document {
    name: string;
    description: string;
    duration: number; // Assuming duration is in hours
    level: 'difficult' | 'intermediate' | 'beginner';
    module: IModule['_id'];
}

const courseSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    level: { type: String, enum: ['difficult', 'intermediate', 'beginner'], required: true },
 
    module: { type: Schema.Types.ObjectId, ref: 'Module', required: true }
});

const Course = mongoose.model<ICourse>('Course', courseSchema);

export default Course;