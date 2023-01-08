import { knexSnakeCaseMappers } from "objection";

export default {
  production: {
    client: 'pg',
    connection: {
      connectionString: "postgres://ecortofr:XbHj5fthghNSD9i7DTb9uQV5D5Xv0fX6@mel.db.elephantsql.com/ecortofr",
      // ssl: { rejectUnauthorized: false },
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