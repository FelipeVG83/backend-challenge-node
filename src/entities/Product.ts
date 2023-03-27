export class Product {
   public idProduct: number;
   public name: string;
   public active: boolean;

   constructor(props: Omit<Product, 'idProduct'>, idProduct?: number) {
    Object.assign(this, props);
   }
}