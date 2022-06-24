import knex from 'knex'
import config from './knexfile'

const configEnv = config[process.env.NODE_ENV || 'development']
const db = knex(configEnv)

export default db
