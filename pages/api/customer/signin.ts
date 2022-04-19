import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyPassword } from 'helpers';
import { db } from 'database';

type Data = { ok: boolean, message?: string, customer?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {
  case 'POST':
    return postCustomer(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const postCustomer = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { email, password } = req.body;
  
  const query = 'SELECT * FROM customer WHERE email = $1';
  const values = [email];

  try {
    const { rows } = await db.conn.query(query, values);
    
    if (rows.length === 0) {
      return res.status(400).json({
        ok: false,
        message: 'Incorrect email or password.'
      });
    }

    const { id, name, password: dbPassword, role, profile_image } = rows[0];

    if (!verifyPassword(dbPassword, password)) {
      return res.status(400).json({
        ok: false,
        message: 'Incorrect email or password.'
      });
    }

    return res.status(200).json({
      ok: true,
      customer: { id, name, email, role, profile_image }
    });
    

  } catch (error: any) {
    console.log(error);

    if (error.code === '23505') {
      return res.status(400).json({
        ok: false,
        message: 'Email is already in use.'
      });
    }

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
