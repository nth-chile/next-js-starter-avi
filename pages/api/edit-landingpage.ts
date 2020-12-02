import { NextApiHandler } from 'next'
import Filter from 'bad-words'
import { query } from '../../lib/db'

const filter = new Filter()

const handler: NextApiHandler = async (req, res) => {
  const { landingpage_id, nickname, headline, subheadline, description, ctatext, ctaurl, ctasurvey, pagetags, logourl, bgurl, googleanalyticsid, klpbranding, pageurl } = req.body
  try {
    if (!landingpage_id || !nickname || !headline || !pageurl) {
      return res
        .status(400)
        .json({ message: '`landingpage_id`,`nickname`, `pageurl` and `headline` are all required' })
    }

    const results = await query(
      `
      CALL upd_landingpage
      (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      `,
      [landingpage_id, filter.clean(nickname), filter.clean(headline),filter.clean(subheadline),filter.clean(description),filter.clean(ctatext),ctaurl,ctasurvey,pagetags,logourl,bgurl,googleanalyticsid,klpbranding,pageurl]
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
