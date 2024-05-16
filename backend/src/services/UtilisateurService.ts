import bcrypt from "bcrypt";
import utilisateurSchema, { IUtilisateur } from "../schemas/utilisateur.schema";

export class UtilisateurService {

    /**
     * 
     * @param user 
     * @returns 
     */
    async signup(user: IUtilisateur): Promise<IUtilisateur> {
        const utilisateur = new utilisateurSchema(user);

        return utilisateur.save();
       
    }

    /**
     * 
     * @param email 
     * @param password 
     * @returns 
     */
    async login(email: string, password: string): Promise<IUtilisateur | null> {

        const utilisateur = await utilisateurSchema.findOne({
            email: email
        });

        if(!utilisateur) {
            return null;
        }

        const isPasswordValid = await bcrypt.compare(password, utilisateur.motDePasse);

        if(!isPasswordValid) {
            return null;
        }

        return utilisateur;
    }
}