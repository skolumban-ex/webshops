import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Item } from "./items.entity";
import { Repository } from "typeorm";
import { ItemsRepository } from "./items.repository";


@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: ItemsRepository
    ) {}

    async createItem(item: Omit<Item, 'id'>): Promise<Item> {
        return this.itemsRepository.createItem(item);
    }

    async getAllItems(): Promise<Item[]> {
        return this.itemsRepository.getAllItems();
    }
}