import { db } from 'database';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

type Data = { ok: boolean, message?: string, order?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {
  case 'POST':
    const secret = process.env.NEXTAUTH_SECRET;
    const token: any = await getToken({ req, secret });

    if (token.user.role !== 'admin') {
      return res.status(401).json({
        ok: false,
        message: 'Unauthorized.'
      });
    }

    return getOrders(req, res);
  
  case 'PUT':
    return updateOrder(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request.'
    });
  }
};

const getOrders = async (req: NextApiRequest, res: NextApiResponse) => {
  const limit = req.query.limit === 'undefined' ? 'NULL' : req.query.limit;
  const offset = req.query.offset === 'undefined' ? 'NULL' : req.query.offset;

  const query = `SELECT order_info.*, customer.name FROM order_info INNER JOIN customer ON order_info.customer_id = customer.id ORDER BY created_at DESC LIMIT ${ limit } OFFSET ${ offset }`;

  try {
    
    const { rows } = await db.conn.query(query);
    console.log(rows);
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

const updateOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  
};
