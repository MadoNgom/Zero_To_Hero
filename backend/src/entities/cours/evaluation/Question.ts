export class Question {
    
    private _intituleQuestion: string;

    constructor(intituleQuestion: string) {
        this._intituleQuestion = intituleQuestion;
    }

    get intituleQuestion(): string {
        return this._intituleQuestion;
    }

    set intituleQuestion(value: string) {
        this._intituleQuestion = value;
    }
}