import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { db } from 'database';
import { ICustomer } from 'interfaces';

type Data = { ok: boolean, message?: string, customer?: ICustomer }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {

  case 'PUT':
    return updateCustomerData(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request.'
    });
  }
};

const updateCustomerData = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { uid } = req.query;
  const secret = process.env.NEXTAUTH_SECRET;
  const token = await getToken({ req, secret });

  if (token?.sub !== uid) {
    return res.status(401).json({
      ok: false,
      message: 'Unauthorized.'
    });
  }

  const { name, email, phone_number, profile_image } = req.body;
  const query = 'UPDATE customer SET name = $1, email = $2, phone_number = $3, profile_image = $4 WHERE id = $5 RETURNING *';
  const values = [name, email, phone_number, profile_image, uid];

  try {
    const { rows } = await db.conn.query(query, values);

    return res.status(200).json({
      ok: true,
      customer: rows[0],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      message: 'Internal Server Error.'
    });
  }
};
