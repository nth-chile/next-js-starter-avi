import { NextApiHandler } from 'next'
import Filter from 'bad-words'
import { query } from '../../lib/db'

const filter = new Filter()

const handler: NextApiHandler = async (req, res) => {
  const { id, nickname, headline, pageurl } = req.body
  try {
    if (!id || !nickname || !headline || !pageurl) {
      return res
        .status(400)
        .json({ message: '`id`,`nickname`, `pageurl` and `headline` are all required' })
    }

    const results = await query(
      `
      CALL upd_landingpage
      (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      `,
      [id, filter.clean(nickname), filter.clean(headline),'','','','','','','','','','',pageurl]
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
