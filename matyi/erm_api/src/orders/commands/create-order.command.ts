export class CreateOrderCommand {
    constructor(
        public readonly items: {
            productName: string;
            quantity: number;
            price: number;
        }[]
    ) {}
}