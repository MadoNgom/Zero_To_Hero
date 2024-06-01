import { Request, Response } from 'express';
import { Router } from 'express';
import Course from '../models/course.model';

export const createCourse = async (req: Request, res: Response) => {
    try {
        const newCourse = new Course(req.body);
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getCourses = async (req: Request, res: Response) => {
    try {
        const courses = await Course.find().populate('formateur');  // Populate formateur with name and expertise fields
        res.json(courses);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getCourse = async (req: Request, res: Response) => {
    try {
        const course = await Course.findById(req.params.id).populate('formateur');  // Populate formateur with name and expertise fields
        res.json(course);
    } catch (error) {
        res.status(404).json(error);
    }
};

export const updateCourse = async (req: Request, res: Response) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCourse);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const deleteCourse = async (req: Request, res: Response) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json(error);
    }
};

