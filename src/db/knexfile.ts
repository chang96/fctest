import { knexSnakeCaseMappers } from "objection";

export default {
  production: {
    client: 'pg',
    connection: {
      connectionString: "",
      // ssl: { rejectUnauthorized: false },
    },
  },
    development: {
        client: 'pg',
        connection: {
          host: 'localhost',
          user: 'user',
          password: 'pw',
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