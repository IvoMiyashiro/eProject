import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { db } from 'database';

type Data = { ok: boolean, message?: string, orders?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {
  case 'POST':
    return getOrders(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request.'
    });
  }
};

const getOrders = async (req: NextApiRequest, res: NextApiResponse) => {

  const { uid } = req.query;
  const secret = process.env.NEXTAUTH_SECRET;
  const token = await getToken({ req, secret });

  if (token?.sub !== uid) {
    return res.status(401).json({
      ok: false,
      message: 'Unauthorized.'
    });
  }

  const query = 'SELECT * FROM order_info WHERE customer_id = $1';
  const value = [uid];

  try {
    
    const { rows } = await db.conn.query(query, value);

    return res.status(200).json({
      ok: true,
      orders: rows
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      message: 'Internal Server Error.'
    });
  }

};
