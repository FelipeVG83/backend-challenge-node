import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn('increment')
    public clientId: number;
    @Column()
    public name: string;
    @Column()
    public cpf: string;
    @Column()
    public birthDate: string;
    @Column()
    public active: boolean;
    
    constructor(props: Omit<Client, 'clientId'>, clientId?: number) {
        Object.assign(this, props);
    }
}