import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, products?: any, totalCount?: number }
const DEFAULT_LIMIT = 12;

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
  const offset = req.query.offset || 'NULL';
  const limit = req.query.limit || 'NULL';
  const orderBy = req.query.orderBy || 'DESC';
  const sortBy = req.query.sortBy || 'price';

  let query = `SELECT product.*, AVG(review.rating) AS rating FROM product FULL JOIN review ON product.id = review.product_id WHERE LOWER(product.title) LIKE LOWER($1) OR LOWER(product.brand) LIKE LOWER($1) OR LOWER(product.category) LIKE LOWER($1) GROUP BY product.id ORDER BY product.${ sortBy } ${ orderBy } LIMIT ${ limit } OFFSET ${ offset }`;
  const value = [`%${q}%`];

  try {
    const { rows } = await db.conn.query(query, value);

    query = 'SELECT COUNT(*) FROM product';
    const { rows: totalCount } = await db.conn.query(query);

    return res.status(200).json({
      ok: true,
      products: rows,
      totalCount: totalCount[0].count
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error'
    });
  }
};
