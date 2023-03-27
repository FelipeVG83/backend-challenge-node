import { Product } from "../../entities/Product";
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
        const product = new Product(data);
        await this.productsRepository.save(product);
    }

    async selectAll(): Promise<Product[]> {
        return await this.productsRepository.selectAll();
    }
}