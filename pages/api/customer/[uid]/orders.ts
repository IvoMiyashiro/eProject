import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { db } from 'database';

type Data = { ok: boolean, message?: string, orders?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {

  case 'POST':
    const { uid } = req.query;
    const secret = process.env.NEXTAUTH_SECRET;
    const token: any = await getToken({ req, secret });

    if (token.user.id !== uid) {
      return res.status(401).json({
        ok: false,
        message: 'Unauthorized.'
      });
    }

    if (!!req.query.search) return searchOrders(req, res);
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
  const limit = req.query.limit === 'undefined' ? 'NULL' : req.query.limit;
  const offset = req.query.offset === 'undefined' ? 'NULL' : req.query.offset;

  let query = `SELECT * FROM order_info WHERE customer_id = $1 ORDER BY created_at DESC LIMIT ${ limit } OFFSET ${ offset }`;
  const value = [uid];

  try {
    const { rows } = await db.conn.query(query, value);
    const { rows: ordersLength } = await db.conn.query('SELECT COUNT(*) FROM order_info');

    return res.status(200).json({
      ok: true,
      orders: rows,
      totalOrders: ordersLength[0].count
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      message: 'Internal Server Error.'
    });
  }
};

const searchOrders = async (req: NextApiRequest, res: NextApiResponse) => {

  const { search } = req.query;

  const query = 'SELECT * FROM order_info WHERE id = $1';
  const value = [search];

  try {
    const { rows } = await db.conn.query(query, value);
    const { rows: ordersLength } = await db.conn.query('SELECT COUNT(*) FROM order_info');

    return res.status(200).json({
      ok: true,
      orders: rows,
      totalOrders: ordersLength[0].count
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      message: 'Internal Server Error.'
    });
  }
};
