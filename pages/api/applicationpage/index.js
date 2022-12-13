import { applicationpageData } from "/data/applicationpageData"

export default function handler (req, res) {
  return res.status(200).json({ applicationpageData })
}
