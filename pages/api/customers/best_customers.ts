import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { db } from 'database';
import { ICustomer } from 'interfaces';

type Data = { ok: boolean, message?: string, customers?: ICustomer[] }

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

    return getBestCustomers(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getBestCustomers = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const limit = req.query.limit === 'undefined' ? 'NULL' : req.query.limit;

  try {
    const query = 'SELECT id, name, profile_image, total_purchases, created_at FROM customer ORDER BY total_purchases ASC LIMIT $1';
    const value = [limit];

    const { rows } = await db.conn.query(query, value);
    return res.status(200).json({
      ok: true,
      customers: rows
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error'
    });
  }
};
