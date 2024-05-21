import mongoose, { Schema } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
import { ROLE } from "../utils/roles.utils";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    type: string;
    isPremium: boolean;
}

const userSchema: Schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    type: {type: String, enum: [ROLE.ADMIN, ROLE.FORMATEUR, ROLE.APPRENANT], required: true},
    isPremium: {type: Boolean, required: true}
});

userSchema.plugin(uniqueValidator);


export default mongoose.model<IUser>('User', userSchema);