import express from 'express';
import { createCourse, getCourses, getCourse, updateCourse, deleteCourse, getCourseCount } from '../controllers/course.controller';

const router = express.Router();

router.get('/count', getCourseCount); // Assurez-vous que cette ligne est avant '/:id'
router.get('/:id', getCourse);
router.get('/', getCourses);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;
