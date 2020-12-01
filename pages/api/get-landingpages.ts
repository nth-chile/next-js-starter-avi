import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

// USER_ID WILL NEED TO BE DEFINED AFTER AUTH CALL!
const varUser_id = 1; //override for testing...
//varUser_id = user_id;

const handler: NextApiHandler = async (_, res) => {
  try {
  //   const results = await query(`
  //     SELECT * FROM entries
  //     ORDER BY id DESC
  //     LIMIT 10
  // `)

//   const results = await query(
//   `
//   CALL sel_landingpage_by_user 
//   (?)
//   `,
//   [varUser_id]
// ) 

const results = await query(
  `
  select landingpage.* 
	from 
		landingpage 
INNER JOIN team_user USING (team_id)
WHERE 
	team_user.user_id = ?
ORDER BY 
	landingpage.crdate DESC; 
  `,
  [varUser_id]
) 

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
