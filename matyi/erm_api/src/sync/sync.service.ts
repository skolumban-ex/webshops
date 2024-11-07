import { Injectable } from "@nestjs/common";
import { ConfigService } from "src/config/config.service";
import { Order } from "src/orders/orders.entity";
import { Product } from "src/products/products.entity";

@Injectable()
export class SyncService {
    constructor(private configService: ConfigService) {}

    async syncData() {
        const highFrequencyClient = await this.configService.highFrequencyDB.connect();
        const lowFrequencyClient = await this.configService.lowFrequencyDB.connect();

        try {
            const orders = await highFrequencyClient.query<Order>('SELECT * FROM orders');
            for (const order of orders.rows ) {
                await lowFrequencyClient.query(
                    'INSERT INTO orders (productName, quantity, createdAt) VALUES ($1, $2, $3)',
                    [order.productName, order.quantity, order.createdAt]
                );
            }
        } catch (error) {
            console.error('Error syncing data:', error);
        } finally {
            highFrequencyClient.release();
            lowFrequencyClient.release();
        }
    }

    async syncProducts() {
        const highFrequencyClient = await this.configService.highFrequencyDB.connect();
        const lowFrequencyClient = await this.configService.lowFrequencyDB.connect();

        try{
            const products = await highFrequencyClient.query<Product>('SELECT * FROM product');
            for (const product of products.rows) {
                await lowFrequencyClient.query(
                    'UPDATE product SET quantity = $1 WHERE name = $2',
                    [product.quantity, product.name]
                );
            }

        } finally {
            highFrequencyClient.release();
            lowFrequencyClient.release();
        }
    }
}