import { Module } from "./module.model";
import { User } from "./user.model";

export class Course {
    _id?: number;
    title?: string;
    description: string | undefined;
    imageUrl: string | undefined;
    duration: number | undefined;
    level: 'Difficile' | 'Intermediaire' | 'Débutant' | undefined;
    categorie: string | undefined;
    price: { type: 'free' | 'value', amount: number } | undefined;
    formateur: User | undefined;
    modules!: Module[]; // Assuming module ID is a number
}