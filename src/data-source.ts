import { DataSource } from "typeorm";
import { Client } from "./database/entities/Client";
import { Order } from "./database/entities/Order";
import { Product } from "./database/entities/Product";
import { CreateClients1680009097587 } from "./database/migrations/1680009097587-CreateClients";
import { CreateProducts1680009446966 } from "./database/migrations/1680009446966-CreateProducts";
import { CreateOrders1680011518659 } from "./database/migrations/1680011518659-CreateOrders";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "p@ssw0rd",
    database: "challengedb",
    synchronize: true,
    logging: true,
    entities: [ Client, Product, Order ],
    subscribers: [],
    migrations: [ CreateClients1680009097587, CreateProducts1680009446966, CreateOrders1680011518659 ],
})