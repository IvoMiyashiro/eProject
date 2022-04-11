import type { NextApiRequest, NextApiResponse } from 'next';
import { Brand, Category, Product, db, initialData, GpuSpecs, Review, Customer } from 'database';

type Data = { ok: boolean, message: string, resp?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  if (process.env.NODE_ENV === 'production'){
    return res.status(401).json({ ok: false, message: 'Unauthorized'});
  }

  const brands_query    = Brand.insert(initialData.brands).returning().toQuery();
  const category_query  = Category.insert(initialData.categories).returning().toQuery();
  const product_query   = Product.insert(initialData.products).returning().toQuery();
  const gpu_specs_query = GpuSpecs.insert(initialData.gpu_specs).returning().toQuery();
  const customer_query     = Customer.insert(initialData.customer).returning().toQuery();
  const reviews_query   = Review.insert(initialData.reviews).returning().toQuery();

  try {
    const { rows: brands_resp }    = await db.conn.query(brands_query);
    const { rows: category_resp }  = await db.conn.query(category_query);
    const { rows: product_resp }   = await db.conn.query(product_query);
    const { rows: gpu_specs_resp } = await db.conn.query(gpu_specs_query);
    const { rows: customer_resp }     = await db.conn.query(customer_query);
    const { rows: review_resp }    = await db.conn.query(reviews_query);
    
  
    return res.status(200).json({ 
      ok: true, 
      message: 'Done',
      resp: [
        brands_resp,
        category_resp,
        product_resp,
        gpu_specs_resp,
        customer_resp,
        review_resp
      ]
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ 
      ok: false, 
      message: 'Internal server error.',
    });
  }
}
