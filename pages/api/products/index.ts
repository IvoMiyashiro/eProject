import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, products?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {
  case 'GET':
    return getProducts(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const query = 'SELECT id, title, price, discount_price, stock, brand, image_urls[1] FROM product';

  try {
    const resp = await db.conn.query(query);

    return res.status(200).json({
      ok: true,
      products: resp.rows
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
