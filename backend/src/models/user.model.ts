import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
import { ROLE } from "../utils/roles.utils";

export interface IUser extends Document {
    fullName: string; // Changed from 'name' to 'fullName' to match the signup form
    email: string;
    password: string;
    type: string;
    isPremium: boolean;
    iAgree: boolean; // Added to match the signup form
}

const userSchema: Schema = new Schema({
    fullName: {type: String, required: true}, // Changed from 'name' to 'fullName' to match the signup form
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    type: {type: String, enum: [ROLE.ADMIN, ROLE.FORMATEUR, ROLE.APPRENANT], required: true},
    isPremium: {type: Boolean, required: true},
    iAgree: {type: Boolean} // Added to match the signup form
});

userSchema.plugin(uniqueValidator);

export default mongoose.model<IUser>('users', userSchema);