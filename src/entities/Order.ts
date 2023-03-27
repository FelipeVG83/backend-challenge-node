export class Order {
    public idTransaction: number;
    public idClient: number;
    public idProduct: number;
    public valueBuying: number;
    public qtdBuying: number;
    public totalBuying: number;
    public dateOrder: Date;

    constructor(props: Omit<Order, 'idTransaction'>, idTransaction?: number) {
        Object.assign(this, props);
    }
}