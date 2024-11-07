import { Order } from 'src/orders/orders.entity';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    productName: string;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @ManyToOne(() => Order, (order) => order.items)
    order: Order
}