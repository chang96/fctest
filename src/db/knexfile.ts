import { knexSnakeCaseMappers } from "objection";

export default {
    development: {
        client: 'pg',
        connection: {
          host: 'localhost',
          user: 'rahmanorewole',
          password: 'chang',
          database: 'foodcourt',
        },
      },
    pool: {
        min:2,
        max:10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: {
      directory:"./seeds"
    },
    ...knexSnakeCaseMappers
}