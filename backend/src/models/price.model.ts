import mongoose, { Schema } from 'mongoose';

export interface IPrice {
  type: 'free' | 'value';
  amount?: number;
}

export const priceSchema = new Schema<IPrice>({
  type: { type: String, required: true },
  amount: { type: Number }
}, { _id: false });