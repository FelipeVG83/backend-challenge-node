import { AppDataSource } from "../../data-source";
import { Order } from "../../database/entities/Order";
import { IOrdersRepository } from "../IOrdersRepository";

export class PostgresOrdersRepository implements IOrdersRepository {
    async selectById(id: number): Promise<Order> {
        return await AppDataSource.getRepository(Order).findOneBy({ transactionId: id })
    }
    
    async selectAll(): Promise<Order[]> {
        return await AppDataSource.getRepository(Order).find()
    }
    
    async save(order: Order): Promise<void> {
        await AppDataSource.getRepository(Order).insert(order)
    }
}