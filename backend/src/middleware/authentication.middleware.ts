import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt.config';
import { AuthenticatedRequest } from '../interfaces/authenticatedrequest.interface';

export const authenticateToken = (request: Request, response: Response, next: NextFunction) => {
    try {
        const authHeader = request.headers.authorization;
        
        if(!authHeader) {
            return response.status(401).json({
                message: "No authentication token provided"
            })
        }

        const [bearer, token] = authHeader.split(' ');

        if (bearer !== 'Bearer' || !token) {
            return response.status(401).json({
                message: "Invalid authentication token"
            });
        }

        const jwtPayload = jwt.verify(token, jwtConfig.jwt.secret);
        (request as AuthenticatedRequest).token = jwtPayload;

        next();
       
    } catch (error) {
        response.status(403).json({
            message: error
        });
    }
};