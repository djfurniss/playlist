/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require("dotenv").config();

const { 
  DATABASE_URL, 
  TEST_DATABASE_URL,
  PRODUCTION_DATABASE_URL,
} = process.env

module.exports = {
  development: {
    client: 'pg',
    connection: DATABASE_URL,
    migrations: {
      directory: "src/db/migrations"
    },
    seeds: {
      directory: "src/db/seeds"
    }
  },
  test: {
    client: 'pg',
    connection: TEST_DATABASE_URL,
    migrations: {
      directory: "src/db/migrations"
    },
    seeds: {
      directory: "src/db/seeds"
    }
  },

  production: {
    client: 'postgresql',
    connection: PRODUCTION_DATABASE_URL,
    migrations: {
      directory: "src/db/migrations"
    }
  },
};
