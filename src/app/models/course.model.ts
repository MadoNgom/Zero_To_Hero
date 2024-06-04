import { Module } from "./module.model";
import { User } from "./user.model";

export class Course {
    id?: number;
    title: string | undefined;
    description: string | undefined;
    imageUrl: string | undefined;
    duration: number | undefined;
    level: 'Difficile' | 'Intermediaire' | 'Débutant' | undefined;
    categorie: string | undefined;
    price: { type: 'free' | 'value', amount: number } | undefined;
    formateur: User | undefined;
    modules: Module[] | undefined; // Assuming module ID is a number
}