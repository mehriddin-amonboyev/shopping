import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function startshop() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  await app.listen(
    configService.get<number>('appConfig.port'),
    configService.get<string>('appConfig.host'), (): void => {
      console.log(`Server started on ${configService.get<string>('appConfig.host')}:${configService.get<number>('appConfig.port')}`)  
    }
  );
}
startshop();
