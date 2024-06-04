import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';
import { IModule } from './module.model';

export interface ICourse extends Document {
    title: string;
    description: string;
    imageUrl: string;
    duration: number;
    level: 'Difficile' | 'Intermediaire' | 'Débutant';
    categorie : string;
    price : number | undefined;
    formateur: IUser['_id'];
    modules : IModule['_id'][];
}

const courseSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    duration: { type: Number, required: true },
    level: { type: String, enum: ['Difficile', 'Intermediaire', 'Débutant'], required: true },
    categorie : {type : String, required : true},
    price: {type: Number, required: true},
    formateur: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    modules : [{ type: Schema.Types.Array, ref: 'Module'}]
});

const Course = mongoose.model<ICourse>('Course', courseSchema);

export default Course;