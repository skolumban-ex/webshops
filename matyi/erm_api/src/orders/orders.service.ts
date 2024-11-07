import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { Order } from "./orders.entity";
import { Repository } from "typeorm";
import { Item } from "src/items/items.entity";

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private ordersRepository: Repository<Order>,
    ) {}

    async createOrder(order: Order): Promise<Order> {
        return this.ordersRepository.save(order);
    }

    async getAllOrders(): Promise<Order[]> {
        return this.ordersRepository.find({ relations: ['items'] });
    }
}