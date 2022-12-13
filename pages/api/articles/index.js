import { data } from "/data/articlesData"

export default function handler (req, res) {
  return res.status(200).json({data})
}
