import { Client } from "../../entities/Client";
import { IClientsRepository } from "../../repositories/IClientsRepository";
import { IClientRequestDTO } from "./ClientDTO";

export interface ICreateClientUseCase {
    create(data: IClientRequestDTO);
    selectAll(): Promise<Client[]>;
}

export class CreateClientUseCase implements ICreateClientUseCase {
    constructor(
        private clientsRepository: IClientsRepository
    ) { }

    async create(data: IClientRequestDTO) {
        const clientAlreadyExists = await this.clientsRepository.findByCpf(data.cpf);

        if (clientAlreadyExists) {
            throw new Error('Client already exists.');
        }

        const user = new Client(data);
        await this.clientsRepository.save(user);
    }

    async selectAll(): Promise<Client[]> {
        return await this.clientsRepository.selectAll();
    }
}