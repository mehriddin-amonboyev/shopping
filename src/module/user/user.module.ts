import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database';
import { userProviders } from './user.providers';

@Module({
  imports: [DatabaseModule],
  providers:[
    ...userProviders,
    UserService,
  ]
})
export class UserModule {}
