import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {

  const { query: reqQuery } = req

  const pageurl = reqQuery.pageurl as string
 
  //are we tracking the pageview
  const track = reqQuery.track as string

  try {
    if (!pageurl) {
      return res.status(400).json({ message: 'missing pageurl' })
    }

    const results = await query(
      `
      CALL landingpage-statctaclicks-track
      (?,?)
  `,
      [pageurl,track]
    )
    return res.json(results)
  } catch (e) {
      console.log("error")
      res.status(500).json({ message: e.message })
  }
}

export default handler
