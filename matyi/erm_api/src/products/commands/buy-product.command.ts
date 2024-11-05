export class BuyProductCommand {
    constructor(
        public readonly productName: string,
        public readonly quantity: number,
    ) {}
}