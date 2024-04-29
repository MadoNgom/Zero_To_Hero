class Module {
    private _idModule: String;
    private _titreModule: String;

    constructor(idModule: String, titreModule: String) {
        this._idModule = idModule;
        this._titreModule = titreModule;
    }

    get idModule(): String {
        return this._idModule;
    }

    set idModule(value: String) {
        this._idModule = value;
    }
    get titreModule(): String {
        return this._titreModule;
    }

    set titreModule(value: String) {
        this._idModule = value;
    }
    public ajouterCours(cours: Cours): Cours {
        //logic
        return cours;
    }
    
    public supprimerCours(cours: Cours): void {
        //logic
    }
}
