import type { NextApiRequest, NextApiResponse } from 'next';
import mercadopago from 'mercadopago';
import { db } from 'database';

type Data = {
  status?: string,
  status_detail?: string,
  id?: any,
  message?: string;
  order_id?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_SECRET as string);

  try {
    const dbPrice = await checkDBPrice(req, res);

    if (dbPrice !== req.body.transaction_amount) {
      return res.status(400).json({
        message: 'Invalid price amount.'
      });
    }

    const payment = await mercadopago.payment.save(req.body);
    const { status, status_detail, id } = payment.body;

    if (status !== 'approved') {
      return res.status(payment.status).json({
        id,
        status,
        status_detail,
      });
    }

    const order = await createOrder(req, res, dbPrice);

    return res.status(payment.status).json({
      id,
      status,
      status_detail,
      order_id: order.id
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Interval Server Error.'
    });
  }
}

const checkDBPrice = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<any> => {
  
  let totalPrice = 0;
  const { productCartData } = JSON.parse(req.body.description);
  const productsIDs = productCartData.map(({ id }: any) => id);

  const query = 'SELECT id, discount_price FROM product WHERE id = ANY ($1)';
  const values = [productsIDs];

  try {
    const { rows } = await db.conn.query(query, values);

    rows.map(({ id, discount_price }: any) => {
      productCartData.map(({ id: cartID, quantity }: any) => {
        if (id === cartID) return totalPrice += discount_price * quantity;
      });
    });

    return totalPrice;
  } catch (error) {
    console.log(error);
  }
};

const createOrder = async (req: NextApiRequest, res: NextApiResponse<Data>, totalPrice: number) => {
  
  const { productCartData, address, shippingMethod, uid } = JSON.parse(req.body.description);
  const productsIDs = productCartData.map(({ id }: any) => id);

  const query = 'INSERT INTO order_info (id, shipping_method, shipping_address, payment_status, products_id, total_paid, customer_id) VALUES (nextval(\'order_id\'),$1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [shippingMethod, address, 'paid', productsIDs, totalPrice, uid];
  await updateStock(productCartData);

  try {
    const { rows } = await db.conn.query(query, values);

    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const updateStock = async (productCartData: {id: string; quantity: number}[]) => {

  productCartData.map(async ({id, quantity}) => {
    const query = 'UPDATE product SET stock = (stock - ($1)) WHERE id = ($2)';
    const values = [quantity, id];

    try {
      await db.conn.query(query, values);
    } catch (error) {
      console.log(error);
    }
  });
};
