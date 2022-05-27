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

const createAddress = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { customer_id, address, zip, province, locality, additional_info } = req.body;

  const query = 'INSERT INTO customer_address (customer_id, address, zip, province, locality, additional_info) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [customer_id, address, zip, province, locality, additional_info];

  try {
    const { rows } = await db.conn.query(query, values);

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

const getAddress = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { uid } = req.query;

  const query = 'SELECT * FROM customer_address WHERE customer_id = $1';
  const value = [uid];

  try {
    const { rows } = await db.conn.query(query, value);

    return res.status(200).json({
      ok: true,
      address: rows
    });
    
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};

const deleteAddress = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
};
