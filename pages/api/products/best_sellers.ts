import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';
import { getToken } from 'next-auth/jwt';

type Data = { ok: boolean, message?: string, products?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch( req.method ) {
  case 'POST':
    const { uid } = req.query;
    const secret = process.env.NEXTAUTH_SECRET;
    const token: any = await getToken({ req, secret });

    if (token.user.id !== uid && token.user.role !== 'admin') {
      return res.status(401).json({
        ok: false,
        message: 'Unauthorized.'
      });
    }

    return getBestSellers(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getBestSellers = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const limit = req.query.limit === 'undefined' ? 'NULL' : req.query.limit;

  try {
    const query = 'SELECT title, image_urls, total_sold FROM product ORDER BY total_sold ASC LIMIT $1';
    const value = [limit];

    const { rows } = await db.conn.query(query, value);
    return res.status(200).json({
      ok: true,
      products: rows
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error'
    });
  }
};
