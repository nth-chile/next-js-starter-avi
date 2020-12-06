import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { id, status } = req.query

  try {
    if (!id || !status) {
      return res.status(400).json({ message: '`id` and `status` required' })
    }
    if (typeof parseInt(id.toString()) !== 'number') {
      return res.status(400).json({ message: '`id` must be a number' })
    }

    if (typeof parseInt(status.toString()) !== 'number') {
      return res.status(400).json({ message: '`status` must be a number' })
    }

    const results = await query(
      `
      CALL disable_landingpage
      (?,?)
  `,
      // @ts-ignore
      [id, status]
    )
    res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
