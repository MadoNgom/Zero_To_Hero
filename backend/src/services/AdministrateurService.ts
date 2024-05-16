import { Formateur } from "../entities/Formateur";
import { Apprenant } from "../entities/apprenant/Apprenant";
import { Module } from "../entities/cours/Module";
import { Discussion } from "../entities/forum/Discussion";
import { Message } from "../entities/forum/Message";

export class AdministrateurService {
    
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