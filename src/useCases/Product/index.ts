import { PostgresProductsRepository } from "../../repositories/implementations/PostgresProductsRepository";
import { ProductController } from "./ProductController";
import { ProductUseCase } from "./ProductUseCase";


const postgresProductRepository = new PostgresProductsRepository();

const productUseCase = new ProductUseCase(postgresProductRepository);
const productController = new ProductController(productUseCase);

export { productUseCase, productController }