import { Router } from 'express';
import { getInscriptions, getInscriptionById, createInscription, deleteInscription } from '../controllers/inscription.controller';

const router = Router();

// GET toutes les inscriptions
router.get('/', getInscriptions);

// GET une inscription par ID
router.get('/:id', getInscriptionById);

// POST créer une nouvelle inscription
router.post('/', createInscription);

// DELETE supprimer une inscription
router.delete('/:id', deleteInscription);

export default router;
