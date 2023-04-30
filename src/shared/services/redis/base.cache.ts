import { createClient } from "redis";
import { config } from "@root/config";
import Logger from "bunyan";

export type RedisClient = ReturnType<typeof createClient>; //there is no type for this in redis, so we make it.

export abstract class BaseCache { //Every place we use in Redis will inherit from this class
    client: RedisClient;
    log: Logger;

    constructor(cacheName: string) {
        this.client = createClient({ url: config.REDIS_HOST });
        this.log = config.createLogger(cacheName);
        this.cacheError();
    }

    private cacheError(): void {
        this.client.on('error', (error: unknown) => {
            this.log.error(error);
        })
    }
}