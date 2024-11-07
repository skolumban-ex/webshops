import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAllProductsQuery } from "./get-all-products.query";
import { ProductService } from "../products.service";
import { Product } from "../products.entity";

@QueryHandler(GetAllProductsQuery)
export class GetAllProductsHandler implements IQueryHandler<GetAllProductsQuery> {
    constructor(private productService: ProductService) {}
    
    execute(query: GetAllProductsQuery): Promise<Product[]> {
        return this.productService.getAllProducts();
    }
}