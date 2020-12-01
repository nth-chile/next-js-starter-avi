import { NextApiHandler } from 'next'
import Filter from 'bad-words'
import { query } from '../../lib/db'

const filter = new Filter()

const handler: NextApiHandler = async (req, res) => {
  const { nickname, headline, maybeEmail, pageurl } = req.body
  try {
    if (!nickname || !headline) {
      return res
        .status(400)
        .json({ message: '`nickname` and `headline` are both required' })
    }

    const results = await query(
      `
      CALL INS_LANDINGPAGE (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      `,
      [filter.clean(nickname), filter.clean(headline),'','','','','','',maybeEmail || '','','','','', pageurl || '']
    )
    
    return res.json(results)
   
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
