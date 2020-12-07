import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { query: reqQuery } = req

  const email = reqQuery.email as string

//TODO: Switch this statement to use USER_ID instead of EMAIL as the main parameter (for performance reasons).

  try {
    const results = await query(
      `
      CALL sel_landingpage_by_user_email 
      (?) 
      `,
      [email]
    ) 

    return res.json({meta:results[0], data:results[1]})
  //  return res.json({data: results[0]})
  //  return res.json({meta: results[0], data: results[1]})
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
