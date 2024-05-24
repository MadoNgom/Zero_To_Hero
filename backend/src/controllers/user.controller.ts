import { Request, Response } from 'express';
import User from '../models/user.model';
import * as service from '../services/user.service'
import bcrypt from "bcrypt";
import { ROLE } from '../utils/roles.utils';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt.config';

export const signup = async (request: Request, response: Response) => {
    try {
        const { fullName, email, password, iAgree } = request.body;

        const hash = await bcrypt.hash(password, 10);

        const newUser = new User({
                fullName: fullName,
                email: email,
                password: hash,
                type: ROLE.APPRENANT,
                isPremium: false,
                iAgree: iAgree
        });

        const user = await service.signup(newUser);

        response.status(201).json({
            message: "Successful registration"
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            message: "Registration error"
        });
    }
};

export const login = async (request: Request, response: Response) => {
    try {
        const { email, password } = request.body;

        const authenticatedUser = await service.login(email, password);

        if (!authenticatedUser.success) {
            return response.status(401).json({
                message: "Invalid email and/or password"
            })
        }

        return response.status(200).json({
            message: "Login successful"
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            message: error
        })
    }
};