import { Request, Response, NextFunction } from 'express';

export function Admin (req: Request, res: Response, next: NextFunction) {
    const Administrator = req.body.admin;

    if (Administrator) {
        next();
    } else{
        res.sendStatus(401).json({message: "You are not an administrator"});
    }
}