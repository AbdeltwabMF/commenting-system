import type { NextApiRequest, NextApiResponse } from 'next'
import knex from '../../../database/knexcon'
import Comment from '../../../types/comment'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment>
) {
  const comments = await knex('comment').select('*')
  console.log(comments)
  res.status(200).json(comments[0])
}
