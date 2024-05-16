import bcrypt from "bcrypt";
import utilisateurSchema, { IUtilisateur } from "../schemas/utilisateur.schema";
import 
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

<<<<<<< HEAD
        await this.database.query(requete, valeurs);
    }

    async auth(email: string, password: string): Promise<Utilisateur | null> {

        const request = `SELECT * FROM Utilisateur WHERE email = ?`;

        const params = [email];

        const [rows] = await this.database.query(request, params);

        if (rows.length === 0) {
=======
        if(!utilisateur) {
>>>>>>> 5bf07eead0ecd7affac4eee99c0516de31c5968d
            return null;
        }

        const isPasswordValid = await bcrypt.compare(password, utilisateur.motDePasse);

        if(!isPasswordValid) {
            return null;
        }

        return utilisateur;
    }
}