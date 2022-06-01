import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { db } from 'database';

type Data = { ok: boolean, message?: string, reviews?: any, totalLength?: number }

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

    return getReviews(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request.'
    });
  }
};

const getReviews = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { uid } = req.query;
  const limit = req.query.limit === 'undefined' ? 'NULL' : req.query.limit;
  const offset = req.query.offset === 'undefined' ? 'NULL' : req.query.offset;
  const orderBy = req.query.orderBy === 'undefined' ? 'created_at' : req.query.orderBy;

  const query = `
  SELECT * FROM 
  (SELECT review.*, product.title, product.image_urls[1] FROM review INNER JOIN product ON review.product_id = product.id) AS test 
  WHERE customer_id = $1 ORDER BY ${ orderBy } DESC LIMIT ${ limit } OFFSET ${ offset }`;
  const value = [uid];

  try {
    const { rows } = await db.conn.query(query, value);

    return res.status(200).json({
      ok: true,
      reviews: rows,
      totalLength: rows.length
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      message: 'Internal Server Error.'
    });
  }
};
