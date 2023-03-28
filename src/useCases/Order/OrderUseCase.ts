import { Order } from "../../database/entities/Order";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";
import { IOrderRequestDTO } from "./OrderDTO";

export interface IOrderUseCase {
    create(data: IOrderRequestDTO);
    selectAll(): Promise<Order[]>;
}

export class OrderUseCase implements IOrderUseCase {
    constructor(
        private ordersRepository: IOrdersRepository
    ) { }

    async create(data: IOrderRequestDTO) {
        const order = new Order(data);
        await this.ordersRepository.save(order);
    }

    async selectAll(): Promise<Order[]> {
        return await this.ordersRepository.selectAll();
    }
}