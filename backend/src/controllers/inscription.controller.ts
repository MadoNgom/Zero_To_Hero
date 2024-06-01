import { Request, Response } from 'express';
import Inscription from '../models/inscription.model';
import User from '../models/user.model';
import Course from '../models/module.model';


// GET toutes les inscriptions
export const getInscriptions = async (req: Request, res: Response) => {
    try {
        const inscriptions = (await Inscription.find().populate('user', 'course'));
        res.json(inscriptions);
    } catch (err) {
        res.status(500).send(err);
    }
};

// GET une inscription par ID
export const getInscriptionById = async (req: Request, res: Response) => {
    try {
        const inscription = await Inscription.findById(req.params.id).populate('user course');
        if (!inscription) {
            return res.status(404).send('Inscription not found');
        }
        res.json(inscription);
    } catch (err) {
        res.status(500).send(err);
    }
};

// POST créer une nouvelle inscription
export const createInscription = async (req: Request, res: Response) => {
    try {
        const { userId, courseId, paymentMode } = req.body;
        const user = await User.findById(userId);
        const course = await Course.findById(courseId);

        if (!user || !course) {
            return res.status(404).send('User or Course not found');
        }

        const newInscription = new Inscription({ 
            user: userId, 
            course: courseId,
            paymentMode: paymentMode,
        });
        await newInscription.save();
        res.status(201).json(newInscription);
    } catch (err) {
        res.status(400).send(err);
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
        res.status(500).send(err);
    }
};
