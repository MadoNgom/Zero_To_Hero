import axios from 'axios';
import { Cours } from "../entities/cours/Cours";
export class CoursService {
    
    private apiEndpoint: string;

    constructor(apiEndpoint: string) {
        this.apiEndpoint = apiEndpoint;
    }

    public async ajouterEvaluation(cours: Cours, evaluation: any): Promise<void> {
        try {
            const response = await axios.post(`${this.apiEndpoint}/addEvaluation`, {
                idCours: cours.idCours,
                evaluation: evaluation
            });

            console.log(`Evaluation added successfully: ${response.data}`);
        } catch (error) {
            console.error(`Error adding evaluation: ${error}`);
            throw error;
        }
    }
    
}
