import { articles } from '../../../data/articles'

export default function handler( _req, res ) {
  return res.status(200).json(articles)
}