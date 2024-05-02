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

  private initRoutes(): void {
    this.router.post('/register', this.utilisateurController.register.bind(this.utilisateurController));
    this.router.post('/auth', this.utilisateurController.auth.bind(this.utilisateurController));
  }

  getRouter(): express.Router {
    return this.router;
  }
}
