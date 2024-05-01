import { Utilisateur } from '../Utilisateur';
export class Message {
    private _contenu: string;
    private _auteur: Utilisateur;
    private _dateEnvoi: Date;

    constructor(contenu: string, auteur: Utilisateur, dateEnvoi: Date) {
        this._contenu = contenu;
        this._auteur = auteur;
        this._dateEnvoi = dateEnvoi;
    }

    get contenu(): string {
        return this._contenu;
    }

    set contenu(value: string) {
        this._contenu = value;
    }

    get auteur(): Utilisateur {
        return this._auteur;
    }

    set auteur(value: Utilisateur) {
        this._auteur = value;
    }

    get dateEnvoi(): Date {
        return this._dateEnvoi;
    }

    set dateEnvoi(value: Date) {
        this._dateEnvoi = value;
    }
}
