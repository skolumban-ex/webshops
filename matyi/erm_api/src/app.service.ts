import { Injectable } from '@nestjs/common';
import { Product } from './products/products.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
