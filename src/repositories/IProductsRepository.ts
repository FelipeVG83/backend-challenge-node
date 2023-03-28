import { Product } from "../database/entities/Product";

export interface IProductsRepository {
    selectById(id: number): Promise<Product>;
    selectAll(): Promise<Product[]>;
    save(product: Product): Promise<void>;
}