import type { NextApiRequest, NextApiResponse } from 'next';
import { IAddress } from 'interfaces';
import { db } from 'database';

type Data = { ok: boolean, message?: string, address?: IAddress }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {

  case 'GET':
    return getAddress(req, res);

  case 'POST':
    return createAddress(req, res);

  case 'DELETE':
    return deleteAddress(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const createAddress = (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { customer_id, address, zip, province, locality, additional_info } = req.body;

  const query = 'INSERT INTO customer_address (customer_id, address, zip, province, locality, additional_info) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [customer_id, address, zip, province, locality, additional_info];

  try {
    const { rows } = db.conn.query(query, values);

    return res.status(200).json({
      ok: true,
      address: rows,
      message: 'Address created.'
    });
    
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};

const getAddress = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
};

const deleteAddress = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
};
