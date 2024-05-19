import { Request, Response, Router } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from'mongoose';
import Formateur, { IFormateur } from '../models/formateur.model';

import * as FormateurService from '../services/formateur.service';

export const createFormateur = async (req: Request, res: Response) => {
    try {
        const formateur = await FormateurService.createFormateur(req.body);
        res.status(201).json(formateur);
    } catch (error) {
        const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
        res.status(400).json({ message });
    }
};

export const getAllFormateurs = async (req: Request, res: Response) => {
    try {
        const formateurs = await FormateurService.findAllFormateurs();
        res.json(formateurs);
    } catch (error) {
        const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
        res.status(500).json({ message });
    }
};

export const getFormateurById = async (req: Request, res: Response) => {
    try {
        const formateur = await FormateurService.findFormateurById(req.params.id);
        if (!formateur) {
            return res.status(404).json({ message: 'Formateur not found' });
        }
        res.json(formateur);
    } catch (error) {
        const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
        res.status(500).json({ message });
    }
};

export const updateFormateur = async (req: Request, res: Response) => {
    try {
        const updatedFormateur = await FormateurService.updateFormateur(req.params.id, req.body);
        res.json(updatedFormateur);
    } catch (error) {
        const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
        res.status(400).json({ message });
    }
};

export const deleteFormateur = async (req: Request, res: Response) => {
    try {
        await FormateurService.deleteFormateur(req.params.id);
        res.status(204).send();
    } catch (error) {
        const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
        res.status(500).json({ message });
    }
};