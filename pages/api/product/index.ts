import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, product?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const query = req.query;
  
  switch( req.method ) {
  case 'GET':
    return getProductById(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getProductById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const id = req.query.id;

  const query = 'SELECT * FROM product WHERE id = ($1)';
  const value = [id];

  try {
    const { rows } = await db.conn.query(query, value);

    return res.status(200).json({
      ok: true,
      product: rows
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
