import { getComments } from '../../../controllers/CommentController'
import type { NextApiRequest, NextApiResponse } from 'next'
import Comment from '../../../types/comment'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await getComments().then((comments) => res.json(comments))
}
