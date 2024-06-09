import mongoose, { Schema, Document } from 'mongoose';

export interface IModule extends Document {
    name: string;
    description: string;
}

export const moduleSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
}, { _id: false });