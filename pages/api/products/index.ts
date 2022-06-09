import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, products?: any, totalCount?: number }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {
  case 'GET':
    return getProducts(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

  let query = queryConstructor(req);

  try {
    const { rows: products } = await db.conn.query(query);

    query = 'SELECT COUNT(*) FROM product';
    const { rows: totalCount } = await db.conn.query(query);

    return res.status(200).json({
      ok: true,
      products,
      totalCount: totalCount[0].count
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};

const queryConstructor = (req: NextApiRequest) => {

  const { limit, offset, categories, brands, stock, price, search, orderBy, sortBy } = req.query;

  const OFFSET   = offset !== 'undefined' ? offset : 'NULL';
  const LIMIT    = limit !== 'undefined' ? limit : 'NULL';
  const ORDER_BY = !!orderBy || orderBy !== 'undefined' ? 'DESC' : orderBy;
  const SORT_BY  = !!sortBy  || sortBy !== 'undefined' ? 'price' : price;
  const STOCK    = (stock !== 'undefined' && stock === 'false') ? true : false;
  const SEARCH   = (isUndefined(search as string) ? false : JSON.parse(search as string).length !== 0);

  /* Transformo "Motherboard" ---> 'Motherboard' || ["Motherboard", "CPU"] ---> ['Motherboard', 'CPU' ] para que POSTGRES entienda el query */
  const CATEGORIES = categories !== 'undefined' ? (categories as string).replace(/"/g, '\'') : undefined;
  const BRANDS     = brands     !== 'undefined' ? (brands as string).replace(/"/g, '\'') : undefined;
  const PRICE      = price      !== 'undefined' ? JSON.parse(price as string) : undefined;

  /* En el caso de que venga solo un string le concateno '[' ']' para que entienda el query. */
  const CATEGORIES_QUERY = CATEGORIES?.includes('[') ? CATEGORIES : '[' + CATEGORIES + ']';
  const BRAND_QUERY = BRANDS?.includes('[') ? BRANDS : '[' + BRANDS + ']';

  /* Concateno '% string %' */
  const SEARCH_QUERY = !!SEARCH ? '\'%' + JSON.parse(search as string) + '%\'' : '';

  let subQuery = '';
  let flag = true;
  if (CATEGORIES) {
    subQuery = `${flag ? 'WHERE' : ''} category = ANY (ARRAY${ CATEGORIES_QUERY })`;
    flag = false;
  }
  
  if (BRANDS) {
    subQuery = subQuery + `${flag ? 'WHERE' : ' AND'} brand = ANY (ARRAY${ BRAND_QUERY })`;
    flag = false;
  }
  
  if (PRICE) {
    subQuery = subQuery + `${flag ? 'WHERE' : ' AND'} price BETWEEN ${ Number(PRICE[0]) } AND ${ Number(PRICE[1])}`;
    flag = false;
  }
  
  if (STOCK) {
    subQuery = subQuery + `${flag ? 'WHERE' : ' AND'} stock > 0`;
    flag= false;
  }

  if (SEARCH) {
    subQuery = subQuery + `${flag ? 'WHERE' : ' AND'} LOWER(product.title) LIKE LOWER(${ SEARCH_QUERY }) OR LOWER(product.brand) LIKE LOWER(${ SEARCH_QUERY }) OR LOWER(product.category) LIKE LOWER(${ SEARCH_QUERY })`;
    flag = false;
  }

  return `
    SELECT
      product.*,
      AVG(review.rating) AS rating 
    FROM
      product 
    FULL JOIN
      review 
    ON
      product.id = review.product_id 
      ${ subQuery }
    GROUP BY
      product.id 
    ORDER BY 
      product.${ SORT_BY } ${ ORDER_BY } LIMIT ${ LIMIT } OFFSET ${ OFFSET }
  `;
};

const isUndefined = (value: string) => {
  if (value === 'undefined' || value === undefined) return true;

  return false;
};
