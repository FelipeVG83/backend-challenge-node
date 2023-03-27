export class Client {
    public idClient: number;
    public name: string;
    public cpf: string;
    public birthDate: string;
    public active: boolean;
    
    constructor(props: Omit<Client, 'idClient'>, id?: number) {
        Object.assign(this, props);
    }
}