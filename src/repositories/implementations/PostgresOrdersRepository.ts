import { Order } from "../../database/entities/Order";
import { IOrdersRepository } from "../IOrdersRepository";

export class PostgresOrdersRepository implements IOrdersRepository {
    selectById(id: number): Promise<Order> {
        throw new Error("Method not implemented.");
    }
    selectAll(): Promise<Order[]> {
        throw new Error("Method not implemented.");
    }
    save(client: Order): Promise<void> {
        throw new Error("Method not implemented.");
    }
}