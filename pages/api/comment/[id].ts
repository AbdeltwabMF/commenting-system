import type { NextApiRequest, NextApiResponse } from 'next'
import knex from '../../../database/knexcon'
import Comment from '../../../types/Comment'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment>
) {
  const comments = await knex('comment').select('*')
  console.log(comments)
  try {
    res.status(200).json(comments[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
