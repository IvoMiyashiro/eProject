import type { NextApiRequest, NextApiResponse } from 'next';
import { Brand, Category, Product, db, initialData } from 'database';

type Data = { ok: boolean, message: string, resp?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  if (process.env.NODE_ENV === 'production'){
    return res.status(401).json({ ok: false, message: 'Unauthorized'});
  }

  const brands_query = Brand.insert(initialData.brands).returning().toQuery();
  const category_query = Category.insert(initialData.categories).returning().toQuery();
  const product_query = Product.insert(initialData.products).returning().toQuery();

  const { rows: brands_resp } = await db.conn.query(brands_query);
  const { rows: category_resp } = await db.conn.query(category_query);
  const { rows: product_resp } = await db.conn.query(product_query);
  

  return res.status(200).json({ 
    ok: true, 
    message: 'Proceso realizado correctamente',
    resp: [
      brands_resp,
      category_resp,
      product_resp
    ]
  });
}
