import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

// USER_ID WILL NEED TO BE DEFINED AFTER AUTH CALL!
const varUser_id = 1; //override for testing...
//varUser_id = user_id;

const handler: NextApiHandler = async (req, res) => {
  const { query: reqQuery } = req

  const email = reqQuery.email as string

  try {
    const results = await query(
      `
      select landingpage.*
	from
		landingpage
INNER JOIN user USING (user_id)
WHERE
	user.email = ?
ORDER BY
	landingpage.crdate ASC; 
      `,
      [email]
    ) 

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
