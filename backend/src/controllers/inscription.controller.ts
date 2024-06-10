import { Request, Response } from 'express';
import Inscription from '../models/inscription.model';
import User from '../models/user.model';
import Course from '../models/course.model';
import InscriptionService from '../services/inscription.service';

// GET toutes les inscriptions
export const getInscriptions = async (req: Request, res: Response) => {
    try {
        const inscriptions = await Inscription.find().populate('user').populate('course');
        res.json(inscriptions);
    } catch (err) {
        res.status(500).send((err as Error).message);
    }
};

// GET une inscription par ID
export const getInscriptionById = async (req: Request, res: Response) => {
    try {
        const inscription = await Inscription.findById(req.params.id).populate('user').populate('course');
        if (!inscription) {
            return res.status(404).send('Inscription not found');
        }
        res.json(inscription);
    } catch (err) {
        res.status(500).send((err as Error).message);
    }
};

// POST créer une nouvelle inscription
export const createInscription = async (req: Request, res: Response) => {
    try {
        const { userId, courseId, paymentMode } = req.body;
        const inscription = await InscriptionService.inscrireApprenant(userId, courseId, paymentMode);
        res.status(201).json(inscription);
    } catch (err) {
        res.status(400).send((err as Error).message);
    }
};

// DELETE supprimer une inscription
export const deleteInscription = async (req: Request, res: Response) => {
    try {
        const deletedInscription = await Inscription.findByIdAndDelete(req.params.id);
        if (!deletedInscription) {
            return res.status(404).send('Inscription not found');
        }
        res.json(deletedInscription);
    } catch (err) {
        res.status(500).send((err as Error).message);
    }
};
