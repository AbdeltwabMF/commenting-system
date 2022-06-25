import Knex from 'knex'
import knexfile from './knexfile'

const config = knexfile.development
const knex = Knex(config)

export default knex

// Test: knexcon.ts
// knex('comment').select('*').then(console.log)
