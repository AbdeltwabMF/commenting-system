import type { Knex } from 'knex'
import '../lib/loadEnv'

interface IKnexConfig {
  [key: string]: Knex.Config;
}

const knexConfig: IKnexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWRORD || 'db5432',
      database: process.env.DB_DEV_NAME || 'csdb'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      extension: 'ts'
    },
    seeds: {
      directory: './seeds',
      extension: 'ts'
    }
  },
  test: {
    client: 'postgresql',
    connection: {
      host: process.env.TEST_DB_HOST || '127.0.0.1',
      user: process.env.TEST_DB_USERNAME || 'postgres',
      password: process.env.TEST_DB_PASSWRORD || 'db5432',
      database: process.env.TEST_DB_DEV_NAME || 'csdb'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      extension: 'ts'
    },
    seeds: {
      directory: './seeds',
      extension: 'ts'
    }
  }
}

export default knexConfig
