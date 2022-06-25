import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('comment').del()

  // Inserts seed entries
  await knex('comment').insert([
    {
      comment_id: 1,
      comment_parent: -1,
      comment_body: 'Hola, mom',
      comment_rate: 3,
      comment_timestamp: new Date()
    },
    {
      comment_id: 2,
      comment_parent: 1,
      comment_body: 'Hola, son',
      comment_rate: 5,
      comment_timestamp: new Date()
    },
    {
      comment_id: 3,
      comment_parent: 1,
      comment_body: 'I love you, mom',
      comment_rate: 9,
      comment_timestamp: new Date()
    }
  ])
}
