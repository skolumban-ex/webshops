import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Item } from "./items.entity";
import { Repository } from "typeorm";

@Injectable()
export class ItemsRepository {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>
    ) {}

    async createItem(item: Omit<Item, 'id'>): Promise<Item> {
        return this.itemsRepository.save(item);
    }

    async getAllItems(): Promise<Item[]> {
        return this.itemsRepository.find();
    }
}