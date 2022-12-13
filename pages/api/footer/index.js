import { data } from "/data/footerData"

export default function handler (req, res) {
  return res.status(200).json({ data })
}
