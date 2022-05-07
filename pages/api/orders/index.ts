import { db } from 'database';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { ok: boolean, message?: string, order?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {
  case 'GET':
    return getOrders(req, res);
  
  case 'PUT':
    return updateOrder(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request.'
    });
  }
};

const getOrders = async (req: NextApiRequest, res: NextApiResponse) => {

  const { customer_id } = req.query;

  const query = 'SELECT * FROM order_info WHERE customer_id = ($1)';
  const value = [customer_id];

  try {
    
    const { rows } = db.conn.query(query, value);

    return res.status(200).json({
      ok: true,
      order: rows[0]
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      message: 'Internal Server Error.'
    });
  }

};

const updateOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  
};
