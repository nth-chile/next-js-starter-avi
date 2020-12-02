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

    var varStatus = 1;
    //switch enable / disable positions
    if (parseInt(status) == 1) {
      varStatus = 0;
    } else {
      varStatus = 1;
    }

    const results = await query(
      `
      CALL disable_landingpage
      (?,?)
  `,
      [id,varStatus]
    )
    res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
