export class Course {
    id?: number;
    name: string | undefined;
    description: string | undefined;
    duration: number | undefined;
    level: 'difficult' | 'intermediate' | 'beginner' | undefined;
    price: { type: 'free' | 'value', amount: number } | undefined;
    module: number | undefined; // Assuming module ID is a number
}
