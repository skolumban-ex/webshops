import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAllOrdersQuery } from "./get-all-orders.query";
import { OrdersService } from "../orders.service";

@QueryHandler(GetAllOrdersQuery)
export class GetAllOrdersHandler implements IQueryHandler<GetAllOrdersQuery> {
    constructor(private ordersService: OrdersService) {}

    async execute(): Promise<any> {
        return this.ordersService.getAllOrders();
    }
}