import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {

  const { query: reqQuery } = req

  const pageurl = reqQuery.pageurl as string
 
  //are we tracking the pageview
  var track = reqQuery.track as string

  var varTrack = 0
  if (track.length > 0) {
    varTrack = parseInt(track)
  }

  try {
    if (!pageurl) {
      return res.status(400).json({ message: 'missing pageurl' })
    }

    const results = await query(
      `
      CALL landingpage_statctaclicks_track
      (?,?)
  `,
      [pageurl,varTrack]
    )
    return res.json(results)
  } catch (e) {
      console.log("error")
      res.status(500).json({ message: e.message })
  }
}

export default handler
