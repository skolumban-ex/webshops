import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./products.entity";
import { CqrsModule } from "@nestjs/cqrs";
import { ProductService } from "./products.service";
import { CreateProductHandler } from "./commands/create-product.handler";
import { GetAllProductsHandler } from "./queries/get-all-products.handler";
import { ProductController } from "./products.controller";
import { ProductRepository } from "./products.repository";
import { BuyProductHandler } from "./commands/buy-command.handler";

@Module({
    imports: [TypeOrmModule.forFeature([Product]), CqrsModule],
    providers: [ProductService, CreateProductHandler, GetAllProductsHandler, BuyProductHandler, ProductRepository],
    controllers: [ProductController],
})
export class ProductsModule {}