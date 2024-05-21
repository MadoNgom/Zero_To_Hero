import mongoose, { Schema, Document } from 'mongoose';
import { IFormateur } from './formateur.model';

export interface IModule extends Document {
    title: string;
    description: string;
    imageUrl: string;
    formateur: IFormateur['_id'];
}

const moduleSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    formateur: { type: Schema.Types.ObjectId, ref: 'Formateur', required: true }
});

export default mongoose.model<IModule>('Module', moduleSchema);