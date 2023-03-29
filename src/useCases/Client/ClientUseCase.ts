import { Client } from "../../database/entities/Client";
import { IClientsRepository } from "../../repositories/IClientsRepository";
import { IClientRequestDTO } from "./ClientDTO";

export interface IClientUseCase {
    create(data: IClientRequestDTO);
    selectAll(): Promise<Client[]>;
}

export class ClientUseCase implements IClientUseCase {
    constructor(
        private clientsRepository: IClientsRepository
    ) { }

    async create(data: IClientRequestDTO) {
        if (!data.name || !data.cpf || !data.birthDate) {
            throw new Error('Parameters bad request.');
        }

        const clientAlreadyExists = await this.clientsRepository.selectByCpf(data.cpf);

        if (clientAlreadyExists) {
            throw new Error('Client already exists.');
        }
        const user = new Client(data);
        const result = await this.clientsRepository.save(user);
    }

    async selectAll(): Promise<Client[]> {
        return await this.clientsRepository.selectAll();
    }
}