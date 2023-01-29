import * as express from 'express';
import { CommandeControllers} from '../controllers/commande.controller';
import { Admin } from '../middleware/auth';
import { authenticateJWT } from '../middleware/auth';
import { CommandeRepository } from '../repository/commande.repository';

export const commandeRouter = express.Router();

const commandeControllers = new CommandeControllers();

commandeRouter.post('/register',authenticateJWT, commandeControllers.createCommande);
commandeRouter.get('/commande',authenticateJWT, commandeControllers.getCommande);
commandeRouter.get('/commande/:id',authenticateJWT, commandeControllers.getCommandeById);
commandeRouter.delete('/commande/:id',authenticateJWT, commandeControllers.deleteCommande);
commandeRouter.put('/commande/:id',authenticateJWT, commandeControllers.updateCommande);
