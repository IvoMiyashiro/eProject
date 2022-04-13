import type { NextApiRequest, NextApiResponse } from 'next';
import { IReviews } from 'interfaces';
import { db } from 'database';

type Data = { ok: boolean, message?: string, reviews?: IReviews[], totalLength?: number }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch( req.method ) {
  case 'GET':
    return getReviews(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getReviews = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { id, limit, offset } = req.query;

  let query = 'SELECT review.*, customer.username, customer.profile_image FROM review INNER JOIN customer ON customer.id = review.customer_id WHERE product_id = ($1) LIMIT ($2) OFFSET ($3)';
  let value = [id, limit, offset];

  try {
    const { rows: reviewsRows } = await db.conn.query(query, value);

    query = 'SELECT id FROM review WHERE product_id = ($1)';
    value = [id];

    const { rows: lengthRows } = await db.conn.query(query, value);
    
    return res.status(200).json({
      ok: true,
      reviews: reviewsRows,
      totalLength: lengthRows.length
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
