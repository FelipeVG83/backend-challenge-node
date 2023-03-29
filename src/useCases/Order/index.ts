import { PostgresClientsRepository } from "../../repositories/implementations/PostgresClientsRepository";
import { PostgresOrdersRepository } from "../../repositories/implementations/PostgresOrdersRepository";
import { PostgresProductsRepository } from "../../repositories/implementations/PostgresProductsRepository";
import { OrderController } from "./OrderController";
import { OrderUseCase } from "./OrderUseCase";

const postgresOrderRepository = new PostgresOrdersRepository();
const postgresClientRepository = new PostgresClientsRepository();
const postgresProductRepository = new PostgresProductsRepository();

const orderUseCase = new OrderUseCase(postgresOrderRepository, postgresClientRepository, postgresProductRepository);
const orderController = new OrderController(orderUseCase);

export { orderUseCase, orderController }