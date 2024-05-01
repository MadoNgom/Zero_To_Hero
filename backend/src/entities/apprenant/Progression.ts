import { Module } from "../cours/Module";
import { EtatModule } from './EtatModule';

export class Progression {
    
    private _module: Module;
    private _etatModule: Map<Module, EtatModule>;

    constructor(module: Module, etatModule: Map<Module, EtatModule>) {
        this._module = module;
        this._etatModule = etatModule;
    }

    get module(): Module {
        return this._module;
    }

    set module(value: Module) {
        this._module = value;
    }

    get etatModule(): Map<Module, EtatModule> {
        return this._etatModule;
    }

    set etatModule(value: Map<Module, EtatModule>) {
        this._etatModule = value;
    }

    public validerModule() {
        // Logic to validate module
    }
}
