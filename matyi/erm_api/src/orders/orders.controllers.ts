import { Body, Controller, Get, Post } from "@nestjs/common";
import { Order } from "./orders.entity";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { GetAllOrdersQuery } from "./queries/get-all-orders.query";

@Controller('orders')
export class OrdersController {
    constructor(
        private commandBus: CommandBus,
        private queryBus: QueryBus,
    ) {}

    @Post()
    async createOrder(@Body() orderData: {
        items: {
            productName: string;
            quantity: number;
            price: number;
        }[]
    }): Promise<Order> {
        return this.commandBus.execute(orderData.items);
    }

    @Get()
    async getAllOrders(): Promise<Order[]> {
        const query = new GetAllOrdersQuery();
        return this.queryBus.execute(query);
    }
}