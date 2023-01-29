import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity
    OneToMany,
} from "typeorm";
import { Commande } from "./commande";


@Entity('restaurants')
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    city!: string;

    @OneToMany (()=> Commande, (commande)=> commande.restaurant)

    commandes!: Array<Commande>;
}