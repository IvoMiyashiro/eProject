import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import { db } from 'database';
import { saltPassword } from 'helpers';

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

  const { name, email, password } = req.body;

  const uid = uuidv4();
  const encryptPassword = saltPassword(password);
  
  const query = 'INSERT INTO customer (id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [uid, name, email, encryptPassword];

  try {
    const { rows } = await db.conn.query(query, values);
    const { name, email } = rows[0];

    return res.status(200).json({
      ok: true,
      customer: { name, email }
    });

  } catch (error: any) {
    console.log(error);

    if (error.code === '23505') {
      return res.status(400).json({
        ok: false,
        customer: null,
        message: 'Email is already in use.'
      });
    }

    return res.status(500).json({
      ok: false,
      customer: null,
      message: 'Internal server error.'
    });
  }
};
