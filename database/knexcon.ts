import Knex from 'knex'
import knexfile from './knexfile'
import '../lib/loadEnv'

const config = knexfile[process.env.NODE_ENV || 'development']

const knex = Knex(config)

export default knex
