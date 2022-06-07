import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { db } from 'database';

type Data = { ok: boolean, message?: string, product?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch( req.method ) {
  case 'GET':
    return getProductById(req, res);

  case 'PUT':
    return updateProduct(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getProductById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { id } = req.query;

  const query = 'SELECT * FROM product WHERE id = ($1)';
  const value = [id];

  try {
    const { rows } = await db.conn.query(query, value);

    return res.status(200).json({
      ok: true,
      product: rows[0]
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};

const updateProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const secret = process.env.NEXTAUTH_SECRET;
  const token: any = await getToken({ req, secret });

  if (token?.user.role !== 'admin') {
    return res.status(401).json({
      ok: false,
      message: 'Unauthorized.'
    });
  }

  const { id } = req.query;
  const { title, price, description, stock, category, brand, labels, image_urls, status, updated_at } = req.body.product;

  const query = `UPDATE product SET title = $1, price = $2, description = $3, stock = $4, category = $5, brand = $6, labels = $7, image_urls = $8, status = $9, updated_at = $10 WHERE id = '${ id }'`;
  const value = [title, price, description, stock, category, brand, labels, image_urls, status, updated_at];

  try {
    await db.conn.query(query, value);

    return res.status(200).json({
      ok: true,
      message: 'Product updated.'
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
