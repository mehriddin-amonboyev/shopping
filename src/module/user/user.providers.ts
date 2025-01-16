import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import {REPOSITORY_TOKEN } from "./entities";

export const userProviders = [
    {
        provide: REPOSITORY_TOKEN.USER_REPOSITORY,
        useFactory: (dataSource:DataSource)=> dataSource.getRepository(User),
        inject: [REPOSITORY_TOKEN.DATA_SOURCE],
    }
];