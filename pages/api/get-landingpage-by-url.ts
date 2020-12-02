import { NextApiHandler } from 'next'
import { query } from '../../lib/db'



      // const json = await res.json()
      // const { pageurl: pageURLFromDB } = json[0][0]


const handler: NextApiHandler = async (req, res) => {
  const { pageurl } = req.query

  console.log('CREATING NEW PAGE')
  console.log(pageurl);
  console.log('/CREATING')

  try {
    if (!pageurl) {
      return res.status(400).json({ message: '`pageurl` required' })
    }

     const results = await query(
       `
       CALL sel_landingpage_by_url (?)
     `,
       pageurl
     )

    return res.json(results[0][0])
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
