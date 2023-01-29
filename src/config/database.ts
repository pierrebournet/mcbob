import * as dotenv from "dotenv";
import "reflect-metadata"
import { DataSource } from "typeorm";
import {User} from '../entities/user'
import {commande} from '../entities/commande'
import {Menus} from '../entities/menus'
import {Restaurants} from '../entities/restaurants'
dotenv.config ({path: '.env'})

export const Database = {
type: "postgres",
host: process.env.POSTGRES_HOST || "localhost",
port: Number(process.env.POSTGRES_PORT) || 5432,
username: process.env.POSTGRES_USER || "postgres",
password: process.env.POSTGRES_PASSWORD || "postgres",
database: process.env.POSTGRES_DB || "postgres",
entities: [User, commande, Restaurants, Menus],
synchronize: true,
};
