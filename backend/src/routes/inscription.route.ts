import { Router, Request, Response } from 'express';
import Inscription from '../models/inscription';
import User from '../models/user.model';
import Course from '../models/course.model';

const router = Router();

// GET toutes les inscriptions
router.get('/', async (req: Request, res: Response) => {
    try {
        const inscriptions = await Inscription.find().populate('user course');
        res.json(inscriptions);
    } catch (err) {
        res.status(500).send(err);
    }
});

// GET une inscription par ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const inscription = await Inscription.findById(req.params.id).populate('user course');
        if (!inscription) {
            return res.status(404).send('Inscription not found');
        }
        res.json(inscription);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST créer une nouvelle inscription
router.post('/', async (req: Request, res: Response) => {
    try {
        const { userId, courseId } = req.body;
        const user = await User.findById(userId);
        const course = await Course.findById(courseId);

        if (!user || !course) {
            return res.status(404).send('User or Course not found');
        }

        const newInscription = new Inscription({ user: userId, course: courseId });
        await newInscription.save();
        res.status(201).json(newInscription);
    } catch (err) {
        res.status(400).send(err);
    }
});

// DELETE supprimer une inscription
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deletedInscription = await Inscription.findByIdAndDelete(req.params.id);
        if (!deletedInscription) {
            return res.status(404).send('Inscription not found');
        }
        res.json(deletedInscription);
    } catch (err) {
        res.status(500).send(err);
    }
});

export default router;
