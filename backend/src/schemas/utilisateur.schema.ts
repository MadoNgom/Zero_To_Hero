import mongoose, { Schema } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

export interface IUtilisateur extends Document {
    nom: string;
    email: string;
    motDePasse: string;
    type: string;
    estPremium: boolean;
}

const UtilisateurSchema: Schema = new Schema({
    nom: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    motDePasse: {type: String, required: true},
    type: {type: String, required: true},
    estPremium: {type: Boolean, required: true}
});

UtilisateurSchema.plugin(uniqueValidator);


export default mongoose.model<IUtilisateur>('Utilisateur', UtilisateurSchema);