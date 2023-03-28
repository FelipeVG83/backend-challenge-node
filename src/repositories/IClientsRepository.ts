import { Client } from "../database/entities/Client";

export interface IClientsRepository {
    selectByCpf(cpf: string): Promise<Client>;
    selectAll(): Promise<Client[]>;
    save(client: Client): Promise<void>;
}