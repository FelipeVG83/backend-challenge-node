import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, Timestamp } from "typeorm";
import { Client } from "./Client";
import { Product } from "./Product";

@Entity('orders')
export class Order {
    @PrimaryColumn()
    public transactionId: number;
    @Column()
    @ManyToOne(() => Client)
    public clientId: number;
    @Column()
    @ManyToOne(() => Product)
    public productId: number;
    @Column()
    public buyingValue: number;
    @Column({ name: 'buyingQuantity' })
    public buyingQtd: number;
    @Column()
    public buyingTotal: number;
    @CreateDateColumn()
    public dateOrder: Timestamp;

    constructor(props: Omit<Order, 'transactionId'>, transactionId?: number) {
        Object.assign(this, props);
    }
}