import { Module } from '@nestjs/common';
import { CliModule } from './cli/cli.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './module/order/order.module';
import { ProductModule } from './module/product/product.module';
import { OrderProductModule } from './module/order-product/order-product.module';
import { User } from './module/user/entities/user.entity';
import Redis from 'ioredis';
import { RedisModule } from '@nestjs-modules/ioredis';
import { UserModule } from './module/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from '@config';
import { DatabaseModule } from './database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:'.env',
      load:[appConfig]
    }),
    // RedisModule.forRoot({
    //   type:'single',
    //   url:'redis://localahost:6379'
    // }),
    DatabaseModule,
    CliModule, 
    UserModule,
    ProductModule,
    OrderProductModule,
    OrderModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}