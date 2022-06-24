import type { Knex } from 'knex'

interface IKnexConfig {
  [key: string]: Knex.Config;
}

const config: IKnexConfig = {
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
      directory: './seeds'
    }
  }
}

export default config
