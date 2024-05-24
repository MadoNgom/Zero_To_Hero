import express from 'express';
import { createModule, getModules, getModule, updateModule, deleteModule } from '../controllers/module.controller';

const router = express.Router();


router.post('/', createModule);
router.get('/', getModules);
router.get('/:id', getModule);
router.put('/:id', updateModule);
router.delete('/:id', deleteModule);
export default router;


