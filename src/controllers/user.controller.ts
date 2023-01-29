import { UserRepository } from "../repository/user";
import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { accesTokenSecret} from "../middleware/auth"

const userRepository = new UserRepository();

export default class UserController {
    async createUser(req: Request, res: Response) {
        const { name, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const user = await userRepository.createUser(name, hash);
        if (user) {
        const token = jwt.sign({ name: user.name, isAdmin: user.isAdmin }, accesTokenSecret);
        res.send({ token });
        } else {
        res.sendStatus(409);
        }
    }
    
    async getUser(req: Request, res: Response) {
        const { name } = req.body;
        const user = await userRepository.getUserByName(name);
        if (user) {
        const token = jwt.sign({ name: user.name, isAdmin: user.isAdmin }, accesTokenSecret);
        res.send({ token });
        } else {
        res.sendStatus(404);
        }
    }
    }
