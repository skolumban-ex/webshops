import { Injectable } from "@nestjs/common";
import { Pool } from "pg"

/**
 * Configuration Class
 * the timeouts will be changed probably
 */
@Injectable()
export class ConfigService {
    readonly highFrequencyDB = new Pool ({
        host: 'localhost',
        port: 5432,
        database: 'ecom_high_freq',
        user: 'ecom_admin',
        password: 'password',
        max: 20,
        idleTimeOutMillis: 30000,
        connectionTimeOutMillis: 2000,
    });

    readonly lowFrequencyDB = new Pool ({
        host: 'localhost',
        port: 5432,
        database: 'ecom_low_freq',
        user: 'ecom_admin',
        password: 'password',
        max: 20,
        idleTimeOutMillis: 30000,
        connectionTimeOutMillis: 2000,
    });

    async onModuleDestroy() {
        await this.highFrequencyDB.end();
        await this.lowFrequencyDB.end();
      }
}