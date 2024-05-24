import { Formateur } from "./formateur.model";

export class Module {
    _id?: number;
    title: string | undefined;
    description: string | undefined;
    imageUrl: string | undefined;
    duration: number | undefined;
    formateur: Formateur | undefined;

}