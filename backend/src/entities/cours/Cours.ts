class Cours {
    private _idCours: string;
    private _nomCours: string;
    private _description: string;
    private _duree: Date;
    private _estPayant: boolean;
    private _prixCours: number;
    private _contenu: string;
    private _niveauDifficulter : niveauDifficulte;

    constructor(idCours: string, nomCours: string, description: string, duree: Date, estPayant: boolean, prixCours: number, contenu: string, niveauDifficulter : niveauDifficulte) {
        this._idCours = idCours;
        this._nomCours = nomCours;
        this._description = description;
        this._duree = duree;
        this._estPayant = estPayant;
        this._prixCours = prixCours;
        this._contenu = contenu;
        this._niveauDifficulter = niveauDifficulter;
    }

    // Getters
    get idCours(): string {
        return this._idCours;
    }

    get nomCours(): string {
        return this._nomCours;
    }

    get description(): string {
        return this._description;
    }

    get duree(): Date {
        return this._duree;
    }

    get estPayant(): boolean {
        return this._estPayant;
    }

    get prixCours(): number {
        return this._prixCours;
    }

    get contenu(): string {
        return this._contenu;
    }

    get niveauDifficulter(): niveauDifficulte {
        return this._niveauDifficulter;
    }

    // Setters
    set idCours(value: string) {
        this._idCours = value;
    }

    set nomCours(value: string) {
        this._nomCours = value;
    }

    set description(value: string) {
        this._description = value;
    }

    set duree(value: Date) {
        this._duree = value;
    }

    set estPayant(value: boolean) {
        this._estPayant = value;
    }

    set prixCours(value: number) {
        this._prixCours = value;
    }

    set contenu(value: string) {
        this._contenu = value;
    }
    
    set niveauDifficulter(value: niveauDifficulte) {
        this._niveauDifficulter = value;
    }
    
    public ajouterEvaluation(evaluation: any): void {
        //logic
    }
}



