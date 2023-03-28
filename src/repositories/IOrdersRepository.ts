import { Order } from "../database/entities/Order";

export interface IOrdersRepository {
    selectById(id: number): Promise<Order>;
    selectAll(): Promise<Order[]>;
    save(order: Order): Promise<void>;
}