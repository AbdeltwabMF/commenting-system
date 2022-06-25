import knex from '../database/knexcon'
import Comment from '../types/Comment'

describe('Test database queries', () => {
  it('should return all comments for knex.select(*)', () => {
    knex.select('*').from<Comment>('comment').then(comments => {
      console.log(comments)
      expect(comments).toHaveLength(3)
    })
  })

  it('should return the comment with id = 1 for knex.where(id)', () => {
    knex.select('*').from<Comment>('comment').where('comment_id', 1).then(comment => {
      console.log(comment)
      expect(comment).toHaveLength(1)
    })
  })
})
