import { PostgresClientsRepository } from "../../repositories/implementations/PostgresClientsRepository";
import { ClientController } from "./ClientController";
import { ClientUseCase } from "./ClientUseCase";

const postgresClientRepository = new PostgresClientsRepository();

const clientUseCase = new ClientUseCase(postgresClientRepository);
const clientController = new ClientController(clientUseCase);

export { clientUseCase, clientController }