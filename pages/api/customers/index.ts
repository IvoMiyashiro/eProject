import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, customers?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {
  case 'GET':
    return getCustomers(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getCustomers = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

  const query = 'SELECT * FROM customer';
  
  try {
    const { rows } = await db.conn.query(query);

    return res.status(200).json({
      ok: true,
      customers: rows
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
