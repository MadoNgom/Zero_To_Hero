import mongoose, { Schema, Document } from 'mongoose';

export interface IModule extends Document {
    name: string;
    description: string;
    contenu :string;
}

export const moduleSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    contenu : { type: String },
}, { _id: false });