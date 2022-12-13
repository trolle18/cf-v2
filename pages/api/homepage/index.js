import { homepageData } from "/data/homepageData"

export default function handler (req, res) {
  return res.status(200).json({ homepageData })
}
