import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('products')
export class Product {
   @PrimaryColumn()
   public productId: number;
   @Column()
   public name: string;
   @Column()
   public active: boolean;

   constructor(props: Omit<Product, 'productId'>, productId?: number) {
    Object.assign(this, props);
   }
}