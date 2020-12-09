import { NextApiHandler } from 'next'
import { query } from '../../lib/db'



      // const json = await res.json()
      // const { pageurl: pageURLFromDB } = json[0][0]


const handler: NextApiHandler = async (req, res) => {
  const { query: reqQuery } = req

  const pageurl = reqQuery.pageurl as string
 
  //are we tracking the pageview
  const track = reqQuery.track as string
  var varTrack = 0
  if (track.length > 0 ) {
    varTrack = parseInt(track) 
  }

  try {
    if (!pageurl) {
      return res.status(400).json({ message: '`pageurl` required' })
    }

     const results = await query(
       `
       CALL sel_landingpage_by_url (?,?)
     `,
       [pageurl,varTrack]
     )

    return res.json(results[0][0])
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
