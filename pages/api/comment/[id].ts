import type { NextApiRequest, NextApiResponse } from 'next'
import knex from '../../../database/knexcon'
import Comment from '../../../types/comment'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const comment = await knex('comment').select('*').where('id', req.query.id)
  console.log(comment)
  res.status(200).json(comment)
}
