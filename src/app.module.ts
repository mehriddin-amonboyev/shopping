import { Module } from '@nestjs/common';
import { CliModule } from './cli/cli.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './module/order/order.module';
import { ProductModule } from './module/product/product.module';
import { OrderProductModule } from './module/order-product/order-product.module';
import { User } from './module/user/entities/user.entity';

@Module({
  imports: [CliModule, OrderModule, ProductModule, OrderProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Mehriddin',
      database: 'shopping',
      entities: [User],
      synchronize: true,   //productionga chiqish vaqtida o'chirilsin
    autoLoadEntities: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
