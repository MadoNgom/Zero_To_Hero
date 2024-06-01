import express from 'express';
import { createModule, getModules, getModule, updateModule, deleteModule,getModulesByCourseId } from '../controllers/module.controller';

const router = express.Router();


router.post('/', createModule);
router.get('/', getModules);
router.get('/:id', getModule);
router.put('/:id', updateModule);
router.delete('/:id', deleteModule);
router.get('/courseId/:id', getModulesByCourseId);
export default router;


