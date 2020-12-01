import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { pageurl } = req.query
  try {
    if (!pageurl) {
      return res.status(400).json({ message: '`pageurl` required' })
    }

    // const results = await query(
    //   `
    //   CALL sel_landingpage_by_url (?)
    // `,
    //   pageurl
    // )

    const results = await query(
      `
      select * from landingpage 
      where pageurl = ?;
    `,
      pageurl
    )

    

    return res.json(results[0])
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
