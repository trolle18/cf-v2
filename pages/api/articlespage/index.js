import { articlespageData } from "/data/articlespageData"

export default function handler (req, res) {
  return res.status(200).json({articlespageData})
}
