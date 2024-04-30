export class Utilisateur {
    private _idUtilisateur: string;
    private _nom: string;
    private _prenom: string;
    private _email: string;
    private _password: string;

    constructor(idUtilisateur: string, nom: string, prenom: string, email: string, password: string) {
        this._idUtilisateur = idUtilisateur;
        this._nom = nom;
        this._prenom = prenom;
        this._email = email;
        this._password = password;
    }

    get idUtilisateur(): string {
        return this._idUtilisateur;
    }

    set idUtilisateur(value: string) {
        this._idUtilisateur = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(value: string) {
        this._prenom = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }


    // public afficherInformation(): void {
    //     //logic
    // }
    
    // public modifierProfil(utilisateur: Utilisateur): Utilisateur {
    //     // logic
    //     return utilisateur;
    // }
    
    // public ouvrirDiscussion(discussion: Discussion): void {
    //     //logic
    // }
    
    // public publierMessage(message: Message): void {
    //     //logic
    // }
    
    // public accederPlayground(): void {
    //     //logic
    // }
}



