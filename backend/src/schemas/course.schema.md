import { Schema, model, Document } from 'mongoose';

export interface ICourse extends Document {
    title: string;
    description: string;
    price: number;
    isPremiun: boolean;
}

const courseSchema = new Schema<ICourse>({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    isPremiun: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export const CourseSchema = model<ICourse>('Course', courseSchema);
