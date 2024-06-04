import { Request, Response } from 'express';
import User from '../models/user.model';
import * as service from '../services/user.service';
import bcrypt from "bcrypt";
import { ROLE } from '../utils/roles.utils';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt.config';

export const signup = async (request: Request, response: Response) => {
    try {
        const { fullName, email, password } = request.body;

        const hash = await bcrypt.hash(password, 10);

        const newUser = new User({
                fullName: fullName,
                email: email,
                password: hash,
                type: ROLE.APPRENANT,
                isPremium: false
        });
       
        await service.signup(newUser);

        response.status(201).json({
            message: `Successful registration ${newUser.fullName} OK.`
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            message: "Registration error"
        });
    }
};

export const addTrainer = async (request: Request, response: Response) => {
    try {
        const { fullName, email, password } = request.body;

        const hash = await bcrypt.hash(password, 10);

        const newUser = new User({
                fullName: fullName,
                email: email,
                password: hash,
                type: ROLE.FORMATEUR,
                isPremium: true
        });
       
        const user = await service.signup(newUser);

        response.status(201).json({
            message: "Formateur ajouté avec succès"
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            message: "Trainer registration error"
        });
    }
};

export const login = async (request: Request, response: Response) => {
    try {
        const { email: loginEmail, password } = request.body;

        const authenticatedUser = await service.login(loginEmail, password);

        if (!authenticatedUser) {
            return response.status(401).json({
                message: "Invalid email and/or password"
            })
        }

        const { _id, fullName, email, type } = authenticatedUser.user!;

        return response.status(200).json({
            user: authenticatedUser.user,
            token: jwt.sign({
                userId: _id,
                fullName,
                email,
                role: type
            }, jwtConfig.jwt.secret!, {
                expiresIn: '2h'
            })
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            message: error
        })
    }
};