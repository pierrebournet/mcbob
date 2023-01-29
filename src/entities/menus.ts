import {
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";
import { Commande } from "./commande";


@Entity('menus')
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    price!: number;

    @OneToMany(() => Commande, (commande) => commande.menus)
    commandes!: Array<Commande>;

}