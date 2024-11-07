import { Migration } from '@mikro-orm/migrations';

export class Migration20241107104638 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "my_custom" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "my_custom_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "my_custom" cascade;');
  }

}
