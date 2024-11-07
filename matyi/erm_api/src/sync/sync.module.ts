import { Module } from "@nestjs/common";
import { ConfigModule } from "src/config/config.module";
import { SyncService } from "./sync.service";
import { SyncController } from "./sync.controller";

@Module({
    imports: [ConfigModule],
    providers: [SyncService],
    exports: [SyncService],
    controllers: [SyncController],
})
export class SyncModule {}