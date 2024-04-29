class Reponse {
    private _textReponse: string;
    private _estCorrect: boolean;

    constructor(textReponse: string, estCorrect: boolean) {
        this._textReponse = textReponse;
        this._estCorrect = estCorrect;
    }

    get textReponse(): string {
        return this._textReponse;
    }

    set textReponse(value: string) {
        this._textReponse = value;
    }

    get estCorrect(): boolean {
        return this._estCorrect;
    }

    set estCorrect(value: boolean) {
        this._estCorrect = value;
    }
}