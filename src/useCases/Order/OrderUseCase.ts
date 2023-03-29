import { Order } from "../../database/entities/Order";
import { IClientsRepository } from "../../repositories/IClientsRepository";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { IOrderRequestDTO } from "./OrderDTO";

export interface IOrderUseCase {
    create(data: IOrderRequestDTO);
    selectAll(): Promise<Order[]>;
}

export class OrderUseCase implements IOrderUseCase {
    constructor(
        private ordersRepository: IOrdersRepository,
        private clientsRepository: IClientsRepository,
        private productsRepository: IProductsRepository
    ) { }

    async create(data: IOrderRequestDTO) {
        const clientExists = await this.clientsRepository.selectById(data.clientId);
        if (!clientExists) {
            throw new Error('Client does not exists.');
        }

        const productExists = await this.productsRepository.selectById(data.productId);
        if (!productExists) {
            throw new Error('Product does not exists.');
        }

        const order = new Order(data);
        await this.ordersRepository.save(order);
    }

    async selectAll(): Promise<Order[]> {
        return await this.ordersRepository.selectAll();
    }
}