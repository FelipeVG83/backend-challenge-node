import { Client } from "../../database/entities/Client";
import { IClientsRepository } from "../../repositories/IClientsRepository";

export interface IClientUseCase {
    create(data: Client);
    selectAll(): Promise<Client[]>;
}

export class ClientUseCase implements IClientUseCase {
    constructor(
        private clientsRepository: IClientsRepository
    ) { }

    async create(data: Client) {
        const clientAlreadyExists = await this.clientsRepository.selectByCpf(data.cpf);
        console.log(clientAlreadyExists);

        if (clientAlreadyExists) {
            throw new Error('Client already exists.');
        }
        const user = new Client(data);
        const result = await this.clientsRepository.save(data);
    }

    async selectAll(): Promise<Client[]> {
        return await this.clientsRepository.selectAll();
    }
}