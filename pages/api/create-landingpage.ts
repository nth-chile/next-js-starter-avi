import { NextApiHandler } from 'next'
import Filter from 'bad-words'
import { query } from '../../lib/db'

const filter = new Filter()

const handler: NextApiHandler = async (req, res) => {
  const { pageurl, nickname, headline } = req.body
  try {
    if (!pageurl || !nickname || !headline) {
      return res
        .status(400)
        .json({ message: '`pageurl` and `nickname` and `headline` are required' })
    }

    //TODO: LOOKUP IF PAGEURL IS ALREADY IN USE

    const results = await query(
      `
      CALL INS_LANDINGPAGE (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      `,
      [filter.clean(nickname), filter.clean(headline),'','','','','','',1,'','','','',pageurl]
    )
    
    return res.json(results)
   
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
