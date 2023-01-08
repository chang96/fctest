import { knexSnakeCaseMappers } from "objection";

export default {
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
  },
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
      tableName: "knex_migrations",
      directory: "./migrations"
    },
    seeds: {
      directory:"./seeds"
    },
    ...knexSnakeCaseMappers
}