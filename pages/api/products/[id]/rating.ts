import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, rating?: string, totalLength?: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch( req.method ) {
  case 'GET':
    return getRating(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getRating = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { id } = req.query;

  let query = 'SELECT AVG(rating), COUNT(*) FROM review WHERE product_id = $1';
  let value = [id];

  try {
    const { rows } = await db.conn.query(query, value);
    console.log(rows[0].count, rows[0].avg);
    return res.status(200).json({
      ok: true,
      rating: rows[0].avg,
      totalLength: rows[0].count
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
