import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { IReviews } from 'interfaces';
import { db } from 'database';

type Data = { ok: boolean, message?: string, reviews?: IReviews[], totalLength?: number }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch( req.method ) {
  case 'GET':
    return getReviews(req, res);
  
  case 'POST':
    return createReview(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getReviews = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { id, limit, offset } = req.query;

  let query = 'SELECT review.*, customer.name, customer.profile_image FROM review INNER JOIN customer ON customer.id = review.customer_id WHERE product_id = ($1) LIMIT ($2) OFFSET ($3)';
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

const createReview = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { id: product_id } = req.query;
  const { customer_id, rating, pros, cons, overall } = req.body;
  const id = uuidv4();

  const query = 'INSERT INTO review (id, customer_id, product_id, rating, pros, cons, overall) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
  const values = [id, customer_id, product_id, rating, pros,cons, overall];

  try {
    const { rows } = await db.conn.query(query, values);

    return res.status(200).json({
      ok: true,
      reviews: rows[0],
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
