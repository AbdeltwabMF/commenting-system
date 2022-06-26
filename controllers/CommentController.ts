import knex from '../database/knexcon'
import Comment from '../types/comment'

const getComments = async (): Promise<Comment[]> => {
  const comments: Comment[] = []
  try {
    await knex
      .select('*')
      .from<Comment>('comment')
      .then((data) => {
        comments.push(...data)
      })
  } catch (error: any) {
    console.log({ error: error.message })
  }
  return comments
}

const getComment = async (id: number): Promise<Comment[]> => {
  let comment: Comment[] = []
  try {
    await knex
      .select('*')
      .from<Comment>('comment')
      .where('comment_id', id)
      .then((data) => {
        comment = data
      })
  } catch (error: any) {
    console.log({ error: error.message })
  }
  return comment
}

const getCommentByTimestamp = async (timestamp: Date): Promise<Comment[]> => {
  let comment: Comment[] = []
  try {
    await knex
      .select('*')
      .from<Comment>('comment')
      .where('comment_timestamp', '<', timestamp)
      .then((data) => {
        comment = data
      })
  } catch (error: any) {
    console.log({ error: error.message })
  }
  return comment
}

export { getComments, getComment, getCommentByTimestamp }
