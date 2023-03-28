import { AppDataSource } from "../../data-source";
import { Product } from "../../database/entities/Product";
import { IProductsRepository } from "../IProductsRepository";

export class PostgresProductsRepository implements IProductsRepository {
    async selectById(id: number): Promise<Product> {
        return await AppDataSource.getRepository(Product).findOneBy({ productId: id })
    }

    async selectAll(): Promise<Product[]> {
        return await AppDataSource.getRepository(Product).find();
    }

    async save(product: Product): Promise<void> {
        await AppDataSource.getRepository(Product).create(product);
    }
}