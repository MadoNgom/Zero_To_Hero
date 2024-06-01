import { Request, Response } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from'mongoose';
import Module, { IModule } from '../models/module.model';
import Course, { ICourse } from '../models/course.model';

export const createModule = async (req: Request, res: Response) => {
    try {
        const newModule = new Module(req.body);
        const savedModule = await newModule.save();
        res.status(201).json(savedModule);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getModules = async (req: Request, res: Response) => {
    try {
        const modules = await Module.find().populate('course');
        res.json(modules);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getModule = async (req: Request, res: Response) => {
    try {
        const module = await Module.findById(req.params['id']);
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
        const updatedModule = await Module.findByIdAndUpdate(req.params['id'], req.body, { new: true });
        res.json(updatedModule);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const deleteModule = async (req: Request, res: Response) => {
    try {
        await Module.findByIdAndDelete(req.params['id']);
        res.status(204).send();
    } catch (error) {
        res.status(500).json(error);
    }
};

