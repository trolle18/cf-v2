import { newspageData } from "/data/newspageData"

export default function handler (req, res) {
  return res.status(200).json({ newspageData })
}
