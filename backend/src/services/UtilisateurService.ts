import { Database } from "../database";
import { Utilisateur } from "../entities/Utilisateur";

export class UtilisateurService {

    private database: Database;

    constructor() {
        this.database = new Database();
    }

    async register(user: Utilisateur): Promise<void> {

        const requete = `INSERT INTO Utilisateur (nom, prenom, email, password) VALUES (?, ?, ?, ?)`;
        const valeurs = [user.nom, user.prenom, user.email, user.password];

        await this.database.query(requete, valeurs);
    }

    async auth(email: string, password: string): Promise<Utilisateur | null> {

        const request = `SELECT * FROM Utilisateur WHERE email = ?`;

        const params = [email];

        const [rows] = await this.database.query(request, params);

        if (rows.length === 0) {
            return null;
        }
    
          const utilisateur = rows[0];
    
          if (password !== utilisateur.password) {
            return null;
          }
    
          return new Utilisateur(utilisateur.id, utilisateur.nom, utilisateur.prenom, utilisateur.email, utilisateur.password);
    }
}