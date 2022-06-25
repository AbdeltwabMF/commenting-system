import knex from '../database/db'
import Comment from '../types/Comment'

class Queries {
  getComments = () => {
    try {
      const comments = knex('comments').select('*')
      return comments
    } catch (err: any) {
      // throw new Error(err.message)
      console.log('Error getting comments')
      return -1
    }
  }

  getComment = (id: number) => {
    try {
      return knex('comment').select('*').where('comment_id', id)
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  addComment = (comment: Comment) => {
    try {
      return knex('comment').insert(comment)
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  updateComment = (id: number, comment: Comment) => {
    try {
      return knex('comment').where('comment_id', id).update(comment)
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  deleteComment = (id: number) => {
    try {
      return knex('comment').where('comment_id', id).del()
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  getCommentByParent = (id: number) => {
    try {
      return knex('comment').select('*').where('comment_parent', id)
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  getCommentByRate = (rate: number) => {
    try {
      return knex('comment').select('*').where('comment_rate', rate)
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  getCommentByTimestamp = (timestamp: Date) => {
    try {
      return knex('comment').select('*').where('comment_timestamp', timestamp)
    } catch (err: any) {
      throw new Error(err.message)
    }
  }
}

export default new Queries()
