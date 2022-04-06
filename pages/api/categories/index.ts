import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, categories?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {
  case 'GET':
    return getCategories(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getCategories = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const query = 'SELECT category_name FROM category';
  
  try {
    const { rows } = await db.conn.query(query);

    return res.status(200).json({
      ok: true,
      categories: rows
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
