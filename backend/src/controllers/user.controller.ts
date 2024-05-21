import { Request, Response } from 'express';
import User from '../models/user.model';
import * as service from '../services/user.service'
import bcrypt from "bcrypt";
import { ROLE } from '../utils/roles.utils';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt.config';

export const signup = async (request: Request, response: Response) => {
    try {
        const { name, email, password } = request.body;

        const hash = await bcrypt.hash(password, 10);

        const newUser = new User({
                name: name,
                email: email,
                password: hash,
                type: ROLE.APPRENANT,
                isPremium: false
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
        const {email, password} = request.body;

        const authenticatedUser = await service.login(email, password);

        if(!authenticatedUser) {
            return response.status(401).json({
                message: "Invalid email and/or password"
            })
        }

        return response.status(200).json({
            user: authenticatedUser,
            token: jwt.sign({
                userId: authenticatedUser._id,
                name: authenticatedUser.name,
                email: authenticatedUser.email,
                role: authenticatedUser.type
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