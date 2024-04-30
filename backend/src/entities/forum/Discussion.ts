class Discussion {
    private _titre: string;

    constructor(titre: string) {
        this._titre = titre;
    }

    get titre(): string {
        return this._titre;
    }

    set titre(value: string) {
        this._titre = value;
    }

    
    public ajouterMessage(message : Message) : Message {
        //logic
        return message;
    }
    
    public supprimerMessage(message : Message) : void {
        //logic
    }
}
