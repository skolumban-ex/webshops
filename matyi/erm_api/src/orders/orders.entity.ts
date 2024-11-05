import { Item } from "src/items/items.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createdAt: Date;

    @OneToMany(() => Item, (item) => item.order, {cascade: true })
    items: Item[];
}