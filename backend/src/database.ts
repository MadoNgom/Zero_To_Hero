import * as mysql from 'mysql';
import * as dotenv from 'dotenv';
import { Utilisateur } from './entities/Utilisateur';
import { resolve } from 'path';

dotenv.config();

export class Database {

    private connection: mysql.Connection;

    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });
    }

    connect(): void {
        this.connection.connect((error) => {
            if(error) {
                console.log('Erreur de connexion à la base de données');
                console.error(error);
            }

            console.log('Connexion à la base de données établie');
        });
    }

    createUserTable(): void {
        const requete = `
            CREATE TABLE IF NOT EXISTS Utilisateur (
                idUtilisateur INT AUTO_INCREMENT PRIMARY KEY,
                nom VARCHAR(255),
                prenom VARCHAR(255),
                email VARCHAR(255),
                password VARCHAR(255),
                UNIQUE (email)
            )`;

            this.connection.query(requete, (error) => {
                if(error) {
                    console.log("Erreur lors de la création de la table Utilisateur");
                    console.error(error);
                    return;
                }

                console.log("Table créée avec succès");
            });
    }

    query(requeteSQL: string, params: any[] = []): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connection.query(requeteSQL, params, (error, rows) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    }   
}

