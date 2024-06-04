import { Request, Response } from 'express';
import Module from '../models/module.model';
import Course, { ICourse } from '../models/course.model';
import * as service from '../services/module.service';

export const createModule = async (req: Request, res: Response) => {
    try {
        const savedModule = await service.createModule(new Module(req.body));
        res.status(201).json(savedModule);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getModules = async (req: Request, res: Response) => {
    try {
        const modules = await service.findAllModules();
        res.json(modules);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getModule = async (req: Request, res: Response) => {
    try {
        const module = await service.findModuleById(req.params['id']);
        res.json(module);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const getModulesByCourseId = async (req: Request, res: Response) => {
    try {
        const course = await Course.findById(req.params['id']);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(course.modules);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateModule = async (req: Request, res: Response) => {
    try {
        const updatedModule = await service.updateModuleById(req.params['id'], req.body);
        res.json(updatedModule);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const deleteModule = async (req: Request, res: Response) => {
    try {
        await service.deleteModuleById(req.params['id']);
        res.status(204).send();
    } catch (error) {
        res.status(500).json(error);
    }
};

