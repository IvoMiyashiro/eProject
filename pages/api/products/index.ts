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

    query = countQueryConstructor(req);
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

  const OFFSET   = !isUndefined(offset as string)  ? offset  : 'NULL';
  const LIMIT    = !isUndefined(limit as string)   ? limit   : 'NULL';
  const ORDER_BY = !isUndefined(orderBy as string) ? orderBy : 'DESC';
  const SORT_BY  = !isUndefined(sortBy as string)  ? sortBy  : 'price';
  const SEARCH   = !isUndefined(search as string) && search !== ''  ? JSON.parse(JSON.stringify(search)).length !== 0 : false;
  const STOCK    = !isUndefined(stock as string)  && stock !== 'false' ? true : false;
  
  /* Transformo "Motherboard" ---> 'Motherboard' || ["Motherboard", "CPU"] ---> ['Motherboard', 'CPU' ] para que POSTGRES entienda el query */
  const CATEGORIES = !isUndefined(categories as string) && (categories as string) !== '[]' ? (categories as string).replace(/"/g, '\'') : undefined;
  const BRANDS     = !isUndefined(brands as string)     && (brands as string) !== '[]' ? (brands as string).replace(/"/g, '\'') : undefined;
  const PRICE      = !isUndefined(price as string)     && (price as string) !== '[]' ? JSON.parse(price as string) : undefined;
  
  /* En el caso de que venga solo un string le concateno '[' ']' para que entienda el query. */
  const CATEGORIES_QUERY = CATEGORIES?.includes('[') ? CATEGORIES : '[' + CATEGORIES + ']';
  const BRAND_QUERY = BRANDS?.includes('[') ? BRANDS : '[' + BRANDS + ']';


  /* Concateno '% string %' */
  const SEARCH_QUERY = !!SEARCH ? '\'%' + JSON.parse(JSON.stringify(search)) + '%\'' : '';

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

const countQueryConstructor = (req: NextApiRequest) => {
  const { search } = req.query;

  if (search?.length !== 0) {
    const SEARCH   = !isUndefined(search as string) && search !== ''  ? true : false;
    const SEARCH_QUERY = !!SEARCH ? '\'%' + JSON.parse(JSON.stringify(search)) + '%\'' : '';
    return `SELECT COUNT(*) FROM product WHERE LOWER(product.title) LIKE LOWER(${ SEARCH_QUERY }) OR LOWER(product.brand) LIKE LOWER(${ SEARCH_QUERY }) OR LOWER(product.category) LIKE LOWER(${ SEARCH_QUERY })`;
  }

  return 'SELECT COUNT(*) FROM product'; 
};
