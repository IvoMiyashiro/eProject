import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, products?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch( req.method ) {
  case 'GET':
    return searchProduct(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const searchProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { q } = req.query;

  try {
    const query = 'SELECT * FROM product WHERE LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)';
    const value = [`%${q}%`];

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
