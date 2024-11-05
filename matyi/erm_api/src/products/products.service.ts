import { Body, Inject, Injectable } from "@nestjs/common";
import { ProductRepository } from "./products.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./products.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
    constructor(
        @Inject(ProductRepository)
        private productsRepository: ProductRepository,
    ) {}

    createProduct(@Body() product: Partial<Product>): Promise<Product> {
        throw new Error("Method not implemented.");
    }

    getAllProducts(): Promise<Product[]> {
        return this.productsRepository.getAllProducts();
    }

    async findByName(productName: string): Promise<Product> {
        return this.productsRepository.findByName(productName);
    }

    async update(product: Product): Promise<Product> {
        return this.productsRepository.update(product)
    }
}