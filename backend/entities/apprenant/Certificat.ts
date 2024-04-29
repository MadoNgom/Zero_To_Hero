class Certificat {
    private _numeroCertificat: string;
    private _module: Module;
    private _noteFinale: number;

    constructor(numeroCertificat: string, module: Module, noteFinale: number) {
        this._numeroCertificat = numeroCertificat;
        this._module = module;
        this._noteFinale = noteFinale;
    }

    get numeroCertificat(): string {
        return this._numeroCertificat;
    }

    set numeroCertificat(value: string) {
        this._numeroCertificat = value;
    }

    get module(): Module {
        return this._module;
    }

    set module(value: Module) {
        this._module = value;
    }

    get noteFinale(): number {
        return this._noteFinale;
    }

    set noteFinale(value: number) {
        this._noteFinale = value;
    }
}

