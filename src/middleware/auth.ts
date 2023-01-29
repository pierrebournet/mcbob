import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export const accesTokenSecret = 'youraccesstokensecret';

export function authenticateJWT (req : express.Request, res : express.Response, next : express.NextFunction) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accesTokenSecret, (err, token) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.body.user = token;
            next();
        });
    } else {
        res.sendStatus(401);
    }
    
}