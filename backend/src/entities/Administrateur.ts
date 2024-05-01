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

    public supprimerMessage(message : Message) : void{
        //logic
    }

    public fermerDiscussion(discussion : Discussion) : void {
        //logic
    }

    public supprimerDiscussion(discussion : Discussion) : void {
        //logic
    }

    public inscrireNouveauFormateur(formateur : Formateur) : Formateur {
        return formateur;
    }

    public supprimerFormateur(formateur : Formateur) : void {
        //logic
    }

    public delivrerCertificat(apprenant : Apprenant, module : Module) : any {
        return 'done';
    } 
}

