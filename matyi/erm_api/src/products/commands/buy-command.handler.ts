import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { BuyProductCommand } from "./buy-product.command";
import { ProductService } from "../products.service";
import { NotFoundException } from "@nestjs/common";

@CommandHandler(BuyProductCommand)
export class BuyProductHandler implements ICommandHandler<BuyProductCommand> {
    constructor(
        private readonly productService: ProductService,
    ) {}

    async execute(command: BuyProductCommand): Promise<void> {
        const { productName, quantity } = command;

        const product = await this.productService.findByName(productName);
        if (!product) {
            throw new NotFoundException(`Product with name ${productName} not found.`);
        }

        if (product.quantity < quantity) {
            throw new Error(`Insufficient quantity for product ${productName}.`);
        }

        // Decrease the quantity
        product.quantity -= quantity;

        // Save the updated product
        await this.productService.update(product);
    }
    
}