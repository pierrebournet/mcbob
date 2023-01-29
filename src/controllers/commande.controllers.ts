import { CommandeRepository } from "../repository/commande.repository";
import { Request, Response } from "express";
import { authenticateJWT } from "../middleware/auth";
import { Commande } from "../entities/commande";
import { Menus} from "../entities/menus";
import { Restaurants} from "../entities/restaurants";
import { User } from "../entities/user";

const commandeRepository = new CommandeRepository();
export class CommandeControllers {

    async createCommande(req: Request, res: Response) {
        const { user, restaurants, menus } = req.body;
        const commande = await commandeRepository.createCommande(user, restaurants, menus);
        if (commande) {
            res.status(201).send(commande);
        } else {
            res.status(400).send("Bad request");
        }
    }

    async getCommande(req: Request, res: Response) {
        const { id } = req.params;
        const commande = await commandeRepository.getCommande(id);
        if (!commande) res.status(404).send({ message: "No post found" });
        return res.send(commande);
    }

    async getCommandes(req: Request, res: Response) {
        const commandes = await commandeRepository.getCommandes();
        return res.send(commandes);
    }
}

