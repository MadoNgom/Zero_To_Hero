import { Request, Response } from 'express';
import Course from '../models/course.model';
import Module from '../models/module.model';
import * as service from '../services/course.service';
import upload from '../config/multer-config';


export const createCourse = async (req: Request, res: Response) => {
    const { title, description, duration, level, categorie, price, formateur, modules, imageUrl } = req.body;
    const newCourse = new Course({
        title,
        description,
        imageUrl,
        duration,
        level,
        categorie,
        price,
        formateur,
        modules
    });

    const savedCourse = await service.createCourse(newCourse);
    res.status(201).json(savedCourse);
};

export const getCourses = async (req: Request, res: Response) => {
    try {
        const courses = await service.findAllCourses();
        res.json(courses);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getCourse = async (req: Request, res: Response) => {
    try {
        const course = await service.findCourseById(req.params.id);
        res.json(course);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const updateCourse = async (req: Request, res: Response) => {
    try {
        const updatedCourse = await service.updateCourseById(req.params.id, req.body);
        res.json(updatedCourse);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const deleteCourse = async (req: Request, res: Response) => {
    try {
        await service.deleteCourseById(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getCourseCount = async (req: Request, res: Response) => {
    try {
        const count = await Course.countDocuments();
        res.json({ totalCourses: count });
    } catch (error) {
        res.status(500).send(error);
    }
};



export const createModule = async (req: Request, res: Response) => {
    console.log(req.body.name);
    const file = req.file;
    if (!file) {
        res.status(400).send('No file uploaded.');
        return;
    }
    try {
        const { name, description } = req.body;
        const contenu = req.file ? 'http://localhost:4200/assets/uploads/' + req.file.filename : '';
        const newModule = new Module({
            name,
            description,
            contenu
        });
    
        const savedModule = await service.createModule(newModule);
        const modules = savedModule._id.modules;
        const course = new Course({
            modules: [savedModule]
        });
        const updatedCourse = await service.updateCourseById(req.body.idCours, course);
        res.status(201).json(savedModule);
    } catch (error) {
        res.status(400).json(error);
    }
};
