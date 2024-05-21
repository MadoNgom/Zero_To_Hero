import mongoose, { Schema, Document } from 'mongoose';
import { IModule } from './module.model';

export interface ICourse extends Document {
    name: string;
    description: string;
    duration: number; // Assuming duration is in hours
    level: 'difficult' | 'intermediate' | 'beginner';
    price: { type: 'free' | 'value', amount: number };
    module: IModule['_id'];
}

const courseSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    level: { type: String, enum: ['difficult', 'intermediate', 'beginner'], required: true },
    price: {
        type: {
            type: String,
            enum: ['free', 'value'],
            required: true
        },
        amount: { type: Number, required: function(this: any) { return this.get('price.type') === 'value'; } }
    },
    module: { type: Schema.Types.ObjectId, ref: 'Module', required: true }
});

const Course = mongoose.model<ICourse>('Course', courseSchema);

export default Course;