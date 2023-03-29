import { Client } from "../database/entities/Client";

export interface IClientsRepository {
    selectById(id: number): Promise<Client>;
    selectByCpf(cpf: string): Promise<Client>;
    selectAll(): Promise<Client[]>;
    save(client: Client): Promise<void>;
}