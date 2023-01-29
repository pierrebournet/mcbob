import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from "typeorm";
//import { Repository } from "../repository/user";


@Entity()
export class User {
    save: any;
    static findOne(arg0: { where: { name: string; }; }): User | PromiseLike<User | undefined> | undefined {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    password!: string;

    @Column({
        default: false
    })
    Admin!: boolean;

    //@OneToMany((_type) => Repository, (repository: Repository) => repository.user)
    //repositories!: Array<Repository>;
   // commandes: any;





}




