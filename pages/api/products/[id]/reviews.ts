import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, reviews?: any }

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
  
  const { id } = req.query;

  let query = 'SELECT review.*, customer.username, customer.profile_image FROM review INNER JOIN customer ON customer.id = review.customer_id WHERE product_id = ($1)';
  const value = [id];

  try {
    const { rows } = await db.conn.query(query, value);
    
    return res.status(200).json({
      ok: true,
      reviews: rows
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
