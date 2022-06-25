import Knex from 'knex'
import knexConfig from './knexfile'

const config = knexConfig[process.env.NODE_ENV || 'development']
const knex = Knex(config)

export default knex
