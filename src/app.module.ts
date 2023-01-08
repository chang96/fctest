import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddonServices } from './brands/brands.service';
import BrandAndCategory from "./brands/brands.module";
import knex from "knex";
import {Model} from "objection"
import { setupDB } from './db-setup';

// const db = knex({
//   client: 'pg',
//   connection: {
//     host: 'localhost',
//     user: 'rahmanorewole',
//     password: 'chang',
//     database: 'foodcourt',
//   },
// });

// Model.knex(db)
// db.raw('SELECT 1+1 AS result').then((result) => {
//   if(typeof result.rows[0].result === 'number' && result.rows[0].result === 2){
//     console.log("DB connected")
//   }
// });
setupDB()



@Module({
  imports: [],
  controllers: [AppController,  ...BrandAndCategory],
  providers: [AppService, AddonServices],
})
export class AppModule {}
