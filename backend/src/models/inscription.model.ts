import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';
import { ICourse } from './course.model';

export interface IInscription extends Document {
    user: IUser['_id'];
    course: ICourse['_id'];
    dateInscription: Date;
    paymentMode: string;
    transactionId: string;
}

const inscriptionSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    dateInscription: { type: Date, default: Date.now },
    paymentMode: { type: String, required: true },
    transactionId: { type: String, required: true }
});

const Inscription = mongoose.model<IInscription>('Inscription', inscriptionSchema);

export default Inscription;
