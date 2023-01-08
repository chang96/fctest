import { knexSnakeCaseMappers } from "objection";

export default {
  production: {
    client: 'pg',
    connection: {
      connectionString: "postgresql/connection/string",
      // ssl: { rejectUnauthorized: false },
    },
  },
    development: {
        client: 'pg',
        connection: {
          host: 'localhost',
          user: 'user',
          password: 'user',
          database: 'fc',
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