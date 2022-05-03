import type { NextApiRequest, NextApiResponse } from 'next';
import mercadopago from 'mercadopago';
import { db } from 'database';

type Data = { status?: string, status_detail?: string, id?: any, message?: string}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  let totalPrice = 0;
  mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_SECRET as string);
  const productsIDs = JSON.parse(req.body.description);

  const query = 'SELECT discount_price FROM product WHERE id = ANY ($1)';
  const values = [productsIDs];

  try {

    const { rows } = await db.conn.query(query, values);
  
    rows.map(({ discount_price }: any) => {
      totalPrice += discount_price;
    });

    if (totalPrice !== req.body.transaction_amount) {
      return res.status(400).json({
        message: 'Invalid price amount.'
      });
    }

    const payment = await mercadopago.payment.save(req.body);
    const { status, status_detail, id } = payment.body;
  
    return res.status(payment.status).json({
      status,
      status_detail,
      id
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Interval Server Error.'
    });
  }
}
