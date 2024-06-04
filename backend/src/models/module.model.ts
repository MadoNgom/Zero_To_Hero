import mongoose, { Schema, Document } from 'mongoose';
import { ICourse } from './course.model';

export interface IModule extends Document {
    name: string;
    description: string;
    course: ICourse['_id'];
}

const moduleSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true }
});

export default mongoose.model<IModule>('Modules', moduleSchema);

