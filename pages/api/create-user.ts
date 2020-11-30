import { NextApiHandler } from 'next'
import { query } from '../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { user } = req.body

  try {
    if (!user.email) {
      return res.status(400).json({ message: '`email` as string required' })
    }
    
    const email = user.email
    const stringified = JSON.stringify(user)

    const existingUsers = await query(
      `
      SELECT * FROM user WHERE email = ?
      `,
      [email]
    )

    console.log('user exists');
    console.log(existingUsers);

    let result:any = ''

    if (Array.isArray(existingUsers) && existingUsers.length === 0) {
      result = await query(
        `
        INSERT INTO user (email, meta)
        VALUES (?, ?)
        `,
        [email, stringified]
      )

      console.log('created new user');
      console.log(result);
    }

    return res.status(200).json(result)
  } catch (e) {
    res.status(500).json({ message: e.message || e })
  }
}

export default handler
