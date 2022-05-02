import type { NextApiRequest, NextApiResponse } from 'next';
import mercadopago from 'mercadopago';

type Data = { status?: boolean, status_detail?: string, id?: any, message?: string}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_SECRET as string);

  try {
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
