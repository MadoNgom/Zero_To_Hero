import { Utilisateur } from "../Utilisateur";
import { Module } from "../cours/Module";
export class Apprenant extends Utilisateur {
    private _estPremium: boolean;

    constructor(idUtilisateur: string, nom: string, prenom: string, email: string, password: string, estPremium: boolean) {
        super(idUtilisateur, nom, prenom, email, password);
        this._estPremium = estPremium;
    }

    get estPremium(): boolean {
        return this._estPremium;
    }

    set estPremium(value: boolean) {
        this._estPremium = value;
    }

    public inscrireModule(module : Module) : void {
        //logic
    }

    public desinscrireModule(module : Module) : void {
        //logic
    } 

    public devenirPremium() : void {
        //logic
    }
}