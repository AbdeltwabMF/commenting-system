import knex from '../database/knexcon'
import Comment from '../types/comment'

const data: Comment[] = [
  {
    comment_id: 6,
    comment_parent: 2,
    comment_body: 'This is a test comment',
    comment_timestamp: new Date(),
    comment_rate: 6
  },
  {
    comment_id: 7,
    comment_parent: 2,
    comment_body: 'This is a test comment',
    comment_timestamp: new Date(),
    comment_rate: 7
  }
]

describe('Test database queries', () => {
  it('should get all comments for knex.select *', () => {
    knex
      .select('*')
      .from<Comment>('comment')
      .then((comments) => {
        console.log(comments)
        expect(comments).toHaveLength(3)
      })
  })

  it('should insert new rows for knex.insert', () => {
    knex
      .insert(data)
      .into('comment')
      .then(() => {
        knex
          .select('*')
          .from<Comment>('comment')
          .then((comments) => {
            console.log(comments)
            expect(comments).toHaveLength(5)
          })
      })
  })

  it('should get the comment with id = 1 for knex.select id', () => {
    knex
      .select('*')
      .from<Comment>('comment')
      .where('comment_id', 1)
      .then((comment) => {
        console.log(comment)
        expect(comment).toHaveLength(1)
      })
  })

  it('should update the comment with id = 7 for knex.update id', () => {
    knex('comment')
      .where('comment_id', 7)
      .update({
        comment_id: 8,
        comment_body: 'This is a test comment version 2'
      })
      .then(() => {
        knex
          .select('*')
          .from<Comment>('comment')
          .then((comments) => {
            console.log('after updated:', comments)
            expect(comments).toHaveLength(5)
          })
      })
  })

  it('should delete the comment with id = 6, 7 for knex.delete', () => {
    knex
      .delete()
      .from<Comment>('comment')
      .where('comment_id', '>', 5)
      .then(() => {
        knex
          .select('*')
          .from<Comment>('comment')
          .then((comments) => {
            console.log(comments)
            expect(comments).toHaveLength(3)
          })
      })
  })
})
