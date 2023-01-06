import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import BrandAndCategory from "./brands/brands.module"

@Module({
  imports: [],
  controllers: [AppController,  ...BrandAndCategory],
  providers: [AppService],
})
export class AppModule {}
