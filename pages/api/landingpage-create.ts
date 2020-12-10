import { NextApiHandler } from 'next'
import { query } from '../../lib/db'




const handler: NextApiHandler = async (req, res) => {

  console.log("req.body")
  console.log(req.body)



  const { nickname, headline, subheadline, description, ctatext, ctaurl, ctasurvey, pagetags, maybeEmail, logourl, bgurl, googleanalyticsid, klpbranding, pageurl } = req.body
  try {

    if (!nickname || !headline) {
       return res
         .status(400)
         .json({ message: '`nickname` and `headline` are required' })
    }

    const results = await query(
      `
      CALL LANDINGPAGE_INSERT (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      `,
      [nickname,headline,subheadline,description,ctatext,ctaurl,ctasurvey,pagetags,maybeEmail || '',logourl,bgurl,googleanalyticsid,klpbranding, pageurl || '']
    )

    return res.json(results)
   
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
