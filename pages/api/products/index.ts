import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, products?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const BRANDS_QUERY     = req.query.brands !== 'undefined' ? req.query.brands : '[]';
  const CATEGORIES_QUERY = req.query.categories !== 'undefined' ? req.query.categories : '[]';
  const PRICE_QUERY      = req.query.price !== 'undefined' ? req.query.price : '[]';
  const STOCK_QUERY      = req.query.stock !== 'undefined' ? 'false' : 'true';
  const SEARCH_QUERY     = req.query.search !== 'undefined' ? req.query.search : '[]';
  
  const isFiltered = CATEGORIES_QUERY?.length > 2 || BRANDS_QUERY?.length > 2 || STOCK_QUERY === 'true' || PRICE_QUERY?.length > 2 || SEARCH_QUERY?.length > 2;

  switch( req.method ) {
  case 'GET':
    return getProducts(req, res, isFiltered);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getProducts = async(req: NextApiRequest, res: NextApiResponse<Data>, isFiltered: boolean) => {

  if (isFiltered) return getFilteredProducts(req, res);
  const offset = req.query.offset || 'NULL';
  const limit = req.query.limit || 'NULL';
  
  const query = `SELECT product.*, AVG(review.rating) AS rating FROM product FULL JOIN review ON product.id = review.product_id GROUP BY product.id ORDER BY product.price DESC LIMIT ${ limit } OFFSET ${ offset }`;

  try {
    const { rows } = await db.conn.query(query);

    return res.status(200).json({
      ok: true,
      products: rows
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};

const getFilteredProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  let query = '';
  let values: any = [];
  const offset           = req.query.offset || 0;
  const BRANDS_QUERY     = req.query.brands !== 'undefined' ? req.query.brands : '[]';
  const CATEGORIES_QUERY = req.query.categories !== 'undefined' ? req.query.categories : '[]';
  const PRICE_QUERY      = req.query.price !== 'undefined' ? req.query.price : '[]';
  const STOCK_QUERY      = req.query.stock !== 'undefined' ? 'true' : 'false';
  const SEARCH_QUERY     = req.query.search !== 'undefined' ? req.query.search : '';

  const BRANDS_FILTER_SELECTED     = BRANDS_QUERY?.length > 2;
  const CATEGORIES_FILTER_SELECTED = CATEGORIES_QUERY?.length > 2;
  const PRICE_FILTER_SELECTED      = PRICE_QUERY?.length > 2;
  const STOCK_FILTER_SELECTED      = STOCK_QUERY === 'true';
  const SEARCH_QUERY_SELECTED      = SEARCH_QUERY?.length > 2;

  let bArray      = typeof(JSON.parse(BRANDS_QUERY as string)) === 'string' ? [JSON.parse(BRANDS_QUERY as string)] : JSON.parse(BRANDS_QUERY as string);
  let cArray      = typeof(JSON.parse(CATEGORIES_QUERY as string)) === 'string' ? [JSON.parse(CATEGORIES_QUERY as string)] : JSON.parse(CATEGORIES_QUERY as string);
  let pArray      = typeof(JSON.parse(PRICE_QUERY as string)) === 'string' ? [JSON.parse(PRICE_QUERY as string)] : JSON.parse(PRICE_QUERY as string);
  let searchRegEx = '%' + JSON.parse(SEARCH_QUERY as string) + '%';

  const b_FilterSelected         =  BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const c_FilterSelected         = !BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const bc_FilterSelected        =  BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const s_FilterSelected         = !BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const sb_FilterSelected        =  BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const sc_FilterSelected        = !BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const sbc_FilterSelected       =  BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const p_FilterSelected         = !BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const pb_FilterSelected        =  BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const pc_FilterSelected        = !BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const ps_FilterSelected        = !BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const pbc_FilterSelected       =  BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const pbs_FilterSelected       =  BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const psc_FilterSelected       = !BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const pscb_FilterSeleted       =  BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && !SEARCH_QUERY_SELECTED;
  const search_FilterSelected    = !BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_s_FilterSelected  = !BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_p_FilterSelected  = !BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_c_FilterSelected  = !BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_b_FilterSelected  =  BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_sp_FilterSelected = !BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_pc_FilterSelected = !BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_pb_FilterSelected =  BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_bs_FilterSelected =  BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_spc_FilterSeleted = !BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_sbc_FilterSeleted =  BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_bpc_FilterSeleted =  BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const search_sbp_FilterSeleted =  BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;
  const all_FilterSelected       =  BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED && SEARCH_QUERY_SELECTED;

  if (b_FilterSelected) {
    // console.log('Filtro B');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE brand = ANY ($1) LIMIT 12 OFFSET ($2)';
    values = [bArray, offset];

  } else if (c_FilterSelected) {
    // console.log('Filtro C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE category = ANY ($1) LIMIT 12 OFFSET ($2)';
    values = [cArray];

  } else if (bc_FilterSelected) {
    // console.log('Filtro B y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE category = ANY ($1) AND brand = ANY ($2) LIMIT 12 OFFSET ($3)';
    values = [cArray, bArray, offset];

  } else if (s_FilterSelected) {
    // console.log('Filtro S');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE stock > 0 LIMIT 12 OFFSET ($1)';
    values = [offset];
    
  } else if (sb_FilterSelected) {
    // console.log('Filtro S y B');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE brand = ANY ($1) AND stock > 0 LIMIT 12 OFFSET ($2)';
    values = [bArray, offset];
  }

  else if (sc_FilterSelected) {
    // console.log('Filtro S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE category = ANY ($1) AND stock > 0 LIMIT 12 OFFSET ($2)';
    values = [cArray, offset];
  }

  else if (sbc_FilterSelected) {
    // console.log('Filtro S y B y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE category = ANY ($1) AND brand = ANY ($2) AND stock > 0 LIMIT 12 OFFSET ($3)';
    values = [cArray, bArray, offset];
  }

  else if (p_FilterSelected) {
    // console.log('Filtro P');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE discount_price BETWEEN ($1) AND ($2) LIMIT 12 OFFSET ($3)';
    values = [Number(pArray[0]), Number(pArray[1]), offset];
  }

  else if (pb_FilterSelected) {
    // console.log('Filtro P y B');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE brand = ANY ($3) AND discount_price BETWEEN ($1) AND ($2) LIMIT 12 OFFSET ($4)';
    values = [Number(pArray[0]), Number(pArray[1]), bArray, offset];
  }

  else if (pc_FilterSelected) {
    // console.log('Filtro P y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE category = ANY ($3) AND discount_price BETWEEN ($1) AND ($2) LIMIT 12 OFFSET ($4)';
    values = [Number(pArray[0]), Number(pArray[1]), cArray, offset];
  }

  else if (ps_FilterSelected) {
    // console.log('Filtro P y S');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE stock > 0 AND discount_price BETWEEN ($1) AND ($2) LIMIT 12 OFFSET ($3)';
    values = [Number(pArray[0]), Number(pArray[1]), offset];
  }

  else if (pbc_FilterSelected) {
    // console.log('Filtro P y B y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE category = ANY ($1) AND brand = ANY ($2) AND discount_price BETWEEN ($3) AND ($4) LIMIT 12 OFFSET ($5)';
    values = [cArray, bArray, Number(pArray[0]), Number(pArray[1]), offset];
  }

  else if (pbs_FilterSelected) {
    // console.log('Filtro P y B y S');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE brand = ANY ($3) AND stock > 0 AND discount_price BETWEEN ($1) AND ($2) LIMIT 12 OFFSET ($4)';
    values = [Number(pArray[0]), Number(pArray[1]), bArray, offset];
  }

  else if (psc_FilterSelected) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE stock > 0 AND category = ANY ($3) AND discount_price BETWEEN ($1) AND ($2) LIMIT 12 OFFSET ($4)';
    values = [Number(pArray[0]), Number(pArray[1]), cArray, offset];
  }

  else if (pscb_FilterSeleted) {
    // console.log('Filtro P y S y C y B');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE stock > 0 AND category = ANY ($3) AND brand = ANY ($5) AND discount_price BETWEEN ($1) AND ($2) LIMIT 12 OFFSET ($4)';
    values = [Number(pArray[0]), Number(pArray[1]), cArray, offset, bArray];
  }

  else if (search_FilterSelected) {
    console.log('Filtro Search');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) LIMIT 12 OFFSET ($2)';
    values = [searchRegEx, offset];
  }

  else if (search_s_FilterSelected) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND stock > 0 LIMIT 12 OFFSET ($2)';
    values = [searchRegEx, offset];
  }

  else if (search_p_FilterSelected) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND discount_price BETWEEN ($2) AND ($3) LIMIT 12 OFFSET ($4)';
    values = [searchRegEx, Number(pArray[0]), Number(pArray[1]), offset];
  }

  else if (search_c_FilterSelected) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND category = ANY ($2) LIMIT 12 OFFSET ($3)';
    values = [searchRegEx, cArray, offset];
  }

  else if (search_b_FilterSelected) {
    // console.log('Filtro Search y B');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND brand = ANY ($2) LIMIT 12 OFFSET ($3)';
    values = [searchRegEx, bArray, offset];
  }

  else if (search_sp_FilterSelected) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND stock > 0 AND discount_price BETWEEN ($2) AND ($3) LIMIT 12 OFFSET ($4)';
    values = [searchRegEx, Number(pArray[0]), Number(pArray[1]), offset];
  }

  else if (search_pc_FilterSelected) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND category = ANY ($2) AND discount_price BETWEEN ($3) AND ($4) LIMIT 12 OFFSET ($5)';
    values = [searchRegEx, Number(pArray[0]), Number(pArray[1]), cArray, offset];
  }

  else if (search_pb_FilterSelected) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND brand = ANY ($2) AND discount_price BETWEEN ($3) AND ($4) LIMIT 12 OFFSET ($5)';
    values = [searchRegEx, Number(pArray[0]), Number(pArray[1]), bArray, offset];
  }

  else if (search_bs_FilterSelected) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND stock > 0 AND brand = ANY ($2) LIMIT 12 OFFSET ($3)';
    values = [searchRegEx, bArray, offset];
  }

  else if (search_spc_FilterSeleted) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND stock > 0 AND category = ANY ($2) AND discount_price BETWEEN ($3) AND ($4) LIMIT 12 OFFSET ($5)';
    values = [searchRegEx, cArray, Number(pArray[0]), Number(pArray[1]), offset];
  }

  else if (search_sbc_FilterSeleted) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND stock > 0 AND category = ANY ($2) AND brand = ANY ($3) LIMIT 12 OFFSET ($4)';
    values = [searchRegEx, cArray, bArray, offset];
  }

  else if (search_bpc_FilterSeleted) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND category = ANY ($2) AND brand = ANY ($3) AND discount_price BETWEEN ($4) AND ($5) LIMIT 12 OFFSET ($6)';
    values = [searchRegEx, cArray, bArray, Number(pArray[0]), Number(pArray[1]), offset];
  }

  else if (search_sbp_FilterSeleted) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND stock > 0 AND brand = ANY ($2) AND discount_price BETWEEN ($3) AND ($4) LIMIT 12 OFFSET ($5)';
    values = [searchRegEx, bArray, Number(pArray[0]), Number(pArray[1]), cArray, offset];
  }
  

  else if (all_FilterSelected) {
    // console.log('Filtro TODOS');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(brand) LIKE LOWER($1) OR LOWER(category) LIKE LOWER($1)) AND stock > 0 AND category = ANY ($2) AND brand = ANY ($3) AND discount_price BETWEEN ($4) AND ($5) LIMIT 12 OFFSET ($6)';
    values = [searchRegEx, cArray, bArray, Number(pArray[0]), Number(pArray[1]), offset];
  }

  try {
    const { rows } = await db.conn.query(query, values);
    return res.status(200).json({
      ok: true,
      products: rows
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};
