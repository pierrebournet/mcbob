import { User } from "./user";
import {Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm"
import { Restaurants } from "./restaurants";
import { Menus } from "./menus"

@Entity('commandes')
export class commande extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, (user) => user.commandes)
    user!: User;

    @ManyToOne(() => Restaurants, (restaurants) => restaurants.commandes)
    restaurants!: Restaurants;

    @ManyToOne(() => Menus, (menus) => menus.commandes)
    menus!: Menus;
    
}