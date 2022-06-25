import type { NextApiRequest, NextApiResponse } from 'next'
import knex from '../../../database/db'

interface Comment {
  comment_id: number;
  comment_parent: number;
  comment_body: string;
  comment_rate: number;
  comment_timestamp: Date;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pic<Comment[], comment_id>>
) {
  try {
    knex
      .select('comment_id')
      .from<Comment>('comment')
      .then((comment) => {
        console.log(comment)
        res.status(200).json(comment)
      })
  } catch (err: any) {
    res.status(500).json(err.message)
  }
}
