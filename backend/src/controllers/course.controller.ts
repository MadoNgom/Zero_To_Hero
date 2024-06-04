import { Request, Response } from 'express';
import Course from '../models/course.model';
import * as service from '../services/course.service';

export const createCourse = async (req: Request, res: Response) => {
    try {
        const newCourse = new Course(req.body);
        const savedCourse = await service.createCourse(newCourse);
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(400).json(error);
    }
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

