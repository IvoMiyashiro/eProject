import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, customer?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {
  case 'GET':
    return getCustomer(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getCustomer = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { id } = req.query;

  const query = 'SELECT * FROM customer WHERE id = ($1)';
  const value = [id];
  
  try {
    const { rows } = await db.conn.query(query, value);

    return res.status(200).json({
      ok: true,
      customer: rows
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
