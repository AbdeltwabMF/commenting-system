import knex from 'knex'
import knexfile from './knexfile'

const db = knex(knexfile.development)

module.exports = db
