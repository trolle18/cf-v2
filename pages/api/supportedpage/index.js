import { supportedpageData } from "/data/supportedpageData"

export default function handler (req, res) {
  return res.status(200).json({ supportedpageData })
}
