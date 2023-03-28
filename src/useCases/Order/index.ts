import { PostgresOrdersRepository } from "../../repositories/implementations/PostgresOrdersRepository";
import { OrderController } from "./OrderController";
import { OrderUseCase } from "./OrderUseCase";


const postgresOrderRepository = new PostgresOrdersRepository();

const orderUseCase = new OrderUseCase(postgresOrderRepository);
const orderController = new OrderController(orderUseCase);

export { orderUseCase, orderController }