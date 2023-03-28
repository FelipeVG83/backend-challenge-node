import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Client } from "./Client";
import { Product } from "./Product";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn('increment')
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

    constructor(props: Omit<Order, 'transactionId' | 'buyingTotal' | 'dateOrder'>, transactionId?: number, buyingTotal?: number, dateOrder?: Timestamp) {
        Object.assign(this, props);
        this.buyingTotal = this.buyingQtd * this.buyingValue;
    }
}