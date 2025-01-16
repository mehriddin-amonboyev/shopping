import { DataSource } from "typeorm"

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'Mehriddin',
                database: 'shopping',
                entities: [],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];