export interface Inscription {
    _id?: string;
    user: string;
    course: string;
    dateInscription: Date;
    paymentMode: 'wave' | 'om' | 'visa' | 'mastercard' | 'paypal';
}
