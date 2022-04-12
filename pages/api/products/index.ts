import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, products?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const query = req.query;
  const isFiltered = query.categories?.length > 2 || query.brands?.length > 2 || query.stock === 'true' || req.query.price?.length > 2;

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
  
  const offset = req.query.offset || 0;
  
  const query = 'SELECT * FROM product LIMIT 12 OFFSET ($1)';
  const value = [offset];
  
  try {
    const { rows } = await db.conn.query(query, value);

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

  const offset = req.query.offset || 0;
  const BRANDS_FILTER_SELECTED     = req.query.brands.length > 2;
  const CATEGORIES_FILTER_SELECTED = req.query.categories.length > 2;
  const PRICE_FILTER_SELECTED      = req.query.price.length > 2;
  const STOCK_FILTER_SELECTED      = req.query.stock === 'true';

  const bArray = JSON.parse(req.query.brands as string);
  const cArray = JSON.parse(req.query.categories as string);
  const pArray = JSON.parse(req.query.price as string);

  const b_FilterSelected   =   BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED;
  const c_FilterSelected   =  !BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED;
  const bc_FilterSelected  =   BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED;
  const s_FilterSelected   =  !BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED;
  const sb_FilterSelected  =   BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED;
  const sc_FilterSelected  =  !BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED;
  const sbc_FilterSelected =   BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED && !PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED;
  const p_FilterSelected   =  !BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED;
  const pb_FilterSelected  =   BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED;
  const pc_FilterSelected  =  !BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED;
  const ps_FilterSelected  =  !BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED;
  const pbc_FilterSelected =   BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED && !STOCK_FILTER_SELECTED;
  const pbs_FilterSelected =   BRANDS_FILTER_SELECTED && !CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED;
  const psc_FilterSelected =  !BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED;
  const all_FilterSelected =   BRANDS_FILTER_SELECTED &&  CATEGORIES_FILTER_SELECTED &&  PRICE_FILTER_SELECTED &&  STOCK_FILTER_SELECTED;

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

  else if (all_FilterSelected) {
    // console.log('Filtro S y B y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls FROM product WHERE stock > 0 AND category = ANY ($1) AND brand = ANY ($2) AND discount_price BETWEEN ($3) AND ($4) LIMIT 12 OFFSET ($5)';
    values = [Number(pArray[0]), Number(pArray[1]), cArray, bArray, offset];
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
