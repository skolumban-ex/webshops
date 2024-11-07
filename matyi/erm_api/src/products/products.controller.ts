import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Product } from "./products.entity";
import { GetAllProductsQuery } from "./queries/get-all-products.query";
import { BuyProductCommand } from "./commands/buy-product.command";

@Controller('products')
export class ProductController {
    constructor(
        private queryBus: QueryBus,
        private commandBus: CommandBus,
    ) {}

    @Get('/all')
    async getAllProducts(): Promise<Product[]> {
        const query = new GetAllProductsQuery();
        return this.queryBus.execute(query);
    }

    @Post('/buy/:name')
    async buyProduct(
        @Param('name') productName: string,
        @Query('quantity') quantity: number,
    ): Promise<void> {
        const command = new BuyProductCommand(productName, quantity);
        await this.commandBus.execute(command);
    }
}