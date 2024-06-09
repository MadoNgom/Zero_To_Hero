export class User {
    _id?: string;
    fullName: string = '';
    email: string = '';
    password: string = '';
    type: string = '';
    isPremium: boolean = false;
    isAgree: boolean = false;
}