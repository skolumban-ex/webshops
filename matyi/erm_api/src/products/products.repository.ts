import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./products.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductRepository {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {}
    
    async getAllProducts(): Promise<Product[]> {
        return this.productsRepository.find();
    }

    async findByName(nameQuery: string): Promise<Product | undefined> {
        return this.productsRepository.findOne({where: {name: nameQuery} });
    }

    async update(product: Product): Promise<Product> {
        const existingProduct = await this.productsRepository.findOne({ where: { id: product.id } });
        if (!existingProduct) {
            throw new Error(`Product with ID ${product.id} not found.`);
        }
        
        Object.assign(existingProduct, product);
        return this.productsRepository.save(existingProduct);
    }
}