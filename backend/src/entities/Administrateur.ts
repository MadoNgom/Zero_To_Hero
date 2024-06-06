import { Message } from './forum/Message';
import { Utilisateur } from './Utilisateur';
import { Discussion } from './forum/Discussion';
import { Formateur } from './Formateur';
import { Apprenant } from './apprenant/Apprenant';
import { Module } from './cours/Module';
export class Administrateur extends Utilisateur {
    constructor(idUtilisateur: string, nom: string, prenom: string, email: string, password: string) {
        super(idUtilisateur, nom, prenom, email, password);
    }

    
}

