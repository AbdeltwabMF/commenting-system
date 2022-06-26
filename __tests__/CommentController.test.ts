import {
  getComments,
  getComment,
  getCommentByTimestamp
} from '../controllers/CommentController'

describe('Test database CRUD', () => {
  it('should get all comments for getComments', async () => {
    const comments = await getComments()
    console.info(comments)
    expect(comments).toHaveLength(5)
  })

  it('should get a comment for getComment', async () => {
    const comment = await getComment(3)
    console.info(comment)
    expect(comment).toHaveLength(1)
  })

  it('should get all comments before a timestamp for getCommentByTimestamp', async () => {
    const comments = await getCommentByTimestamp(new Date())
    console.info(comments)
    expect(comments).toHaveLength(5)
  })
})
