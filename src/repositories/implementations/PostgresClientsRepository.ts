import { AppDataSource } from "../../data-source";
import { Client } from "../../database/entities/Client";
import { IClientsRepository } from "../IClientsRepository";

export class PostgresClientsRepository implements IClientsRepository {
    async selectById(id: number): Promise<Client> {
        return await AppDataSource.getRepository(Client).findOneBy({ clientId: id });
    }

    async selectByCpf(cpf: string): Promise<Client> {
        return await AppDataSource.getRepository(Client).findOneBy({ cpf: cpf });
    }
    
    async selectAll(): Promise<Client[]> {
        return await AppDataSource.getRepository(Client).find();
    }

    async save(client: Client): Promise<void> {
        const result = await AppDataSource.getRepository(Client).insert(client);
    }
}