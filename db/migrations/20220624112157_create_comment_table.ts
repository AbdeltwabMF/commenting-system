import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('comment', (table: Knex.TableBuilder) => {
    table.increments('comment_id').primary().unique().notNullable()
    table.integer('comment_parent').defaultTo(-1).notNullable()
    table.text('comment_body').notNullable()
    table.integer('comment_rate').defaultTo(0).notNullable()
    table.timestamp('comment_timestamp').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('comment')
}
