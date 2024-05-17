import mongoose, { Schema, Document } from 'mongoose';
import { IModule } from './module.model';

export interface ICourse extends Document {
    name: string;
    description: string;
    modules: IModule['_id'][];
}

const courseSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    modules: [{ type: Schema.Types.ObjectId, ref: 'Module' }]
});

export default mongoose.model<ICourse>('Course', courseSchema);

