import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Item } from "./items.entity";
import { ItemsService } from "./items.service";
import { ItemsRepository } from "./items.repository";

@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    providers: [ItemsService, ItemsRepository],
    exports: [ItemsService, ItemsRepository],
})
export class ItemsModule {}