import { Product } from "../../database/entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { IProductRequestDTO } from "./ProductDTO";

export interface IProductUseCase {
    create(data: IProductRequestDTO);
    selectAll(): Promise<Product[]>;
}

export class ProductUseCase implements IProductUseCase {
    constructor(
        private productsRepository: IProductsRepository
    ) { }

    async create(data: IProductRequestDTO) {
        if (!data.name) {
            throw new Error('Name information is missing.')
        }

        const product = new Product(data);
        await this.productsRepository.save(product);
    }

    async selectAll(): Promise<Product[]> {
        return await this.productsRepository.selectAll();
    }
}