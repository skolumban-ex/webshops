import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemsModule } from "src/items/items.module";
import { Order } from "./orders.entity";
import { OrdersService } from "./orders.service";
import { CreateOrderHandler } from "./commands/create-orders.handler";
import { GetAllOrdersHandler } from "./queries/get-all-orders.handler";
import { OrdersController } from "./orders.controllers";

@Module({
    imports: [TypeOrmModule.forFeature([Order]), CqrsModule, ItemsModule],
    providers: [OrdersService, CreateOrderHandler, GetAllOrdersHandler],
    controllers: [OrdersController],
})
export class OrdersModule {}