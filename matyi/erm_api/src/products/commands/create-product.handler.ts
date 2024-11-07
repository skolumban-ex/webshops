import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateProductCommand } from "./create-product.command";
import { ProductService } from "../products.service";
import { Product } from "../products.entity";

@CommandHandler(CreateProductCommand)
export class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
    constructor(
        private productService: ProductService,
    ) {}

    execute(command: CreateProductCommand): Promise<Product> {
        return this.productService.createProduct({
            name: command.name,
            price: command.price,
            quantity: command.quantity,
        })
    }

}