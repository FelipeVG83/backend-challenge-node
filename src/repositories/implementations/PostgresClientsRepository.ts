import { Client } from "../../entities/Client";
import { IClientsRepository } from "../IClientsRepository";

export class PostgresClientsRepository implements IClientsRepository {
    async findByCpf(cpf: string): Promise<Client> {
        return null;
    }
    
    selectAll(): Promise<Client[]> {
        throw new Error("Method not implemented.");
    }

    async save(client: Client): Promise<void> {
        
    }
}