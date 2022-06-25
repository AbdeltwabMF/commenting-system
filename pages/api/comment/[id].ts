import type { NextApiRequest, NextApiResponse } from 'next'
import knex from '../../../database/knexcon'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  knex('comment')
    .select('*')
    .where('comment_id', req.query.id)
    .then((comment) => {
      res.status(200).json(comment)
    })
}
