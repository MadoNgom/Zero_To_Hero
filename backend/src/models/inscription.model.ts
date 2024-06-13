import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';
import { ICourse } from './course.model';

export interface IInscription extends Document {
    user: IUser['_id'];
    course: ICourse['_id'];
    dateInscription: Date;
    paymentMode: 'wave' | 'om' | 'visa' | 'mastercard' | 'paypal';
}

const inscriptionSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    dateInscription: { type: Date, default: Date.now },
    paymentMode: { type: String, enum: ['wave', 'om', 'visa', 'mastercard', 'paypal',], required: true },
});

export default mongoose.model<IInscription>('Inscription', inscriptionSchema);
