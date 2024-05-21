import mongoose, { Schema, Document } from 'mongoose';

export interface IFormateur extends Document {
    name: string;
    email: string;
    expertise: string[];
}

const formateurSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    expertise: [{ type: String, required: true }]
});

const Formateur = mongoose.model<IFormateur>('Formateur', formateurSchema);

export default Formateur;

