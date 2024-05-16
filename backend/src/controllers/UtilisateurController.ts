import { Request, Response } from 'express';
import { UtilisateurService } from "../services/UtilisateurService";
import bcrypt from "bcrypt";
import utilisateurSchema from '../schemas/utilisateur.schema';

export class UtilisateurController {

    private utilisateurService: UtilisateurService;

    constructor() {
        this.utilisateurService = new UtilisateurService();
    }

    /**
     * 
     * @param request 
     * @param response 
     */
    async signup(request: Request, response: Response) {

        try {
            const { nom, email, password } = request.body;

            const hash = await bcrypt.hash(password, 10);

            const nouvelUtilisateur = new utilisateurSchema({
                    nom: nom,
                    email: email,
                    motDePasse: hash,
                    type: "Apprenant",
                    estPremium: false
            });
           
            const user = await this.utilisateurService.signup(nouvelUtilisateur);

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

    /**
     * 
     * @param request 
     * @param response 
     * @returns 
     */
    async login(request: Request, response: Response) {

        try {
            const {email, password} = request.body;

            const utilisateur = await this.utilisateurService.login(email, password);

            if(!utilisateur) {
                return response.status(401).json({
                    message: "Email et/ou mot de passe invalides"
                })
            }

            return response.status(200).json(utilisateur);
        } catch (error) {
            response.status(500).json({
                message: error
            })
        }

        
    }
}
