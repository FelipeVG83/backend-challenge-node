import { Client } from "../entities/Client";

export interface IClientsRepository {
    findByCpf(cpf: string): Promise<Client>;
    selectAll(): Promise<Client[]>;
    save(client: Client): Promise<void>;
}