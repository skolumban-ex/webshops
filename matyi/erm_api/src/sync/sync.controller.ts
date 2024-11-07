import { Controller, Post } from "@nestjs/common";
import { SyncService } from "./sync.service";

@Controller('sync')
export class SyncController {
    constructor(
        private readonly syncService: SyncService,
    ) {}

    @Post('data')
    async syncData() {
        await this.syncService.syncData();
        return { message: 'Data sync initiated' };
    }

    @Post('products')
    async syncProducts() {
        await this.syncService.syncProducts();
        return { message: 'Products sync initiated' };
    }
}