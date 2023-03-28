import { Order } from "../database/entities/Order";

export interface IOrdersRepository {
    selectById(id: number): Promise<Order>;
    selectAll(): Promise<Order[]>;
    save(client: Order): Promise<void>;
}