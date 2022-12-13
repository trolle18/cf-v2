import { knowledgepageData } from "/data/knowledgepageData"

export default function handler (req, res) {
  return res.status(200).json({ knowledgepageData })
}
