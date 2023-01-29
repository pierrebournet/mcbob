import * as express from 'express';
import { UserController } from '../controllers/user.controller'

export const users = express.Router();

const UserController = new UserController();

users.post('/register', UserController.createUser);
users.post('/login', UserController.getUser);