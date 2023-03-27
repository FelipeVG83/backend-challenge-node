import { Product } from "../entities/Product";

export interface IProductsRepository {
    selectAll(): Promise<Product[]>;
    save(client: Product): Promise<void>;
}