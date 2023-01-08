import knex from "knex";
import knexFile from "./db/knexfile";
import { Model } from "objection";

function setupDB(){
    const db = process.env.NODE_ENV === "development" ? knex(knexFile.development) : knex(knexFile.production)
    Model.knex(db);
    db.raw('SELECT 1+1 AS result').then((result) => {
        if(typeof result.rows[0].result === 'number' && result.rows[0].result === 2){
          console.log("DB connected")
        }
      });
}


export {
    setupDB
}