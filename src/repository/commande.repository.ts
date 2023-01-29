import { Commande } from "../entities/commande";
import { Restaurant} from "../entities/restaurants";
import { Menu} from "../entities/menus";
import { User } from "../entities/user";
import { commandeRoutes } from "../routes/menus.router"
import { Datasource } from "typeorm"

export class CommandeRepository {


async createCommande(user: User, restaurants: Restaurant, menus: Menu): Promise< Commande | undefined > {
    const commande = new Commande();
    commande.user = user;
    commande.restaurants = restaurants;
    commande.menus = menus;
    return await commande.save();
}

async getCommandeById(id: number): Promise< Commande | undefined > {

    const commande = await Commande.findOne({ where: { id } });
    if (commande) {
        return commande;
    }
    return undefined;
}

async getCommandes(): Promise<Array<Commandes>> {
    return await Commandes.find();
}

async deleteCommande(id: number): Promise<boolean> {
    const commande = await Commandes.findOne({ where: { id } });
    if (commande) {
        await commande.remove();
        return true;
    }
    return false;
}

async updateCommande(id: number, user: User, restaurants: Restaurants, menus: Menus): Promise<Commandes | undefined> {

    const commande = await Commandes.findOne({ where: { id } });
    if (commande) {
        commande.user = user;
        commande.restaurants = restaurants;
        commande.menus = menus;
        await commande.save();
        return commande;
    }
    return undefined;
}

}