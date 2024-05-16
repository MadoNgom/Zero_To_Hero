import express from 'express';
import { UtilisateurController } from '../controllers/UtilisateurController';


export class UtilisateurRoute {

  private router: express.Router;
  private utilisateurController: UtilisateurController;

  constructor() {
    this.router = express.Router();
    this.utilisateurController = new UtilisateurController();
    this.initRoutes();
  }

  /**
   * 
   */
  private initRoutes(): void {
    this.router.post('/signup', this.utilisateurController.signup.bind(this.utilisateurController));
    this.router.post('/login', this.utilisateurController.login.bind(this.utilisateurController));
  }

  /**
   * 
   * @returns 
   */
  getRouter(): express.Router {
    return this.router;
  }
}
