import { Module } from './module.model';
import { User } from './user.model';

export class Course {

  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: number;
  level: 'Difficile' | 'Intermediaire' | 'Débutant';
  categorie: string;
  price: { type: 'free' | 'value'; amount: number };
  formateur: User;
  modules: Module[];

  constructor() {
    this.title = '';
    this.description = '';
    this.imageUrl = '';
    this.duration = 0;
    this.level = 'Débutant';
    this.categorie = '';
    this.price = { type: 'free', amount: 0 };
    this.formateur = new User();
    this.modules = [];
  }
}
