import { Request, Response } from 'express';
import { Utilisateur } from "../entities/Utilisateur";
import { UtilisateurService } from "../services/UtilisateurService";

export class UtilisateurController {

    private utilisateurService: UtilisateurService;

    constructor() {
        this.utilisateurService = new UtilisateurService();
    }

    async register(request: Request, response: Response) {

        try {
            const {nom, email, password } = request.body;
            const utilisateur = new Utilisateur("", nom, nom, email, password);

            await this.utilisateurService.register(utilisateur);

            response.status(201).json({
                message: "Inscription réussi"
            });
        } catch (error) {
            console.error(error);
            response.status(500).json({
                message: "Erreur lors de l'inscription"
            });
        }
        
    }

    async auth(request: Request, response: Response) {

        try {
            const {email, password} = request.body;
            const utilisateur = await this.utilisateurService.auth(email, password);

            if(!utilisateur) {
                return response.status(401).json({
                    error: "Email ou mot de passe invalide"
                });
            }
            
            response.json({
                message: "Connexion réussi"
            }); 
        } catch (error) {
            
        }

        


    }
}
