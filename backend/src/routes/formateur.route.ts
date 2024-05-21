import express from 'express';
import * as FormateurController from '../controllers/formateur.controller';

const router = express.Router();

router.post('/', FormateurController.createFormateur);
router.get('/', FormateurController.getAllFormateurs);
router.get('/:id', FormateurController.getFormateurById);
router.put('/:id', FormateurController.updateFormateur);
router.delete('/:id', FormateurController.deleteFormateur);

export default router;

