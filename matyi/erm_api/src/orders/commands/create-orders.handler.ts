import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { CreateOrderCommand } from './create-order.command';
import { OrdersService } from '../orders.service';
import { ItemsService } from 'src/items/items.service';
import { Order } from '../orders.entity';
import { Item } from 'src/items/items.entity';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
    constructor(
        private ordersService: OrdersService,
        private itemsService: ItemsService,
    ) {}
    
    async execute(command: CreateOrderCommand): Promise<Order> {
        const order = new Order();
        order.createdAt = new Date();
        order.items =  command.items.map(itemData => {
            const item = Object.assign(new Item(), itemData);
            item.order = order;
            return item;
        });

        return this.ordersService.createOrder(order);
    }

}