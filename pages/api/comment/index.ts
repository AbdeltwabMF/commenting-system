import { getComments } from '../../../controllers/CommentController'
import Comment from '../../../types/comment'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const comments = await getComments()
  res.status(200).json(comments)
}
