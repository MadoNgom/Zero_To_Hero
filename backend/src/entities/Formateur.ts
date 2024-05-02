import { Utilisateur } from './Utilisateur';
import { Cours } from './cours/Cours';
import { Module } from './cours/Module';

export class Formateur extends Utilisateur{
    
    constructor(idUtilisateur: string, nom: string, prenom: string, email: string, password: string) {
        super(idUtilisateur, nom, prenom, email, password);
    }

    public creerCours(cours : Cours) : Cours {
        return cours;
    }
    
    public modifierCours(cours : Cours) : Cours {
        return cours;
    }
    public supprimerCours(cours : Cours) : void {
        //logic
    }

    public creeModule(module : Module) : Module {
        return module;
    }

    public modifierModule(module : Module) : Module {
        return module;
    }

    public supprimerModule(module : Module) : void {
        //logic
    }
}