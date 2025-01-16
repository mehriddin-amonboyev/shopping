
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRedis() private readonly redis: Redis,
  ) {}

  
  async create(createuserDto: CreateUserDto){
    const result = await this.usersRepository.save(createuserDto);
    await this.redis.set(result.id, JSON.stringify(result));
    return result;
  }
  
  async findAll(){
    const redisData = await this.redis.keys("");
    if(redisData.length > 0){
      const users = await this.redis.mget(redisData);
      console.log('cache hit')
      return users.map((user) => JSON.parse(user));
    }else{
      const users = await this.usersRepository.find();
      users.forEach(async (user)=>{
        await this.redis.set(users.id, JSON.stringify(user));
      });
      console.log("coche miss")
      return users
    }
  }
  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
