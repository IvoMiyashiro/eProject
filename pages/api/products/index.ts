import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, products?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const query = req.query;
  const isFiltered = query.c?.length > 2 || query.b?.length > 2 || query.s === 'true' || query.p?.length > 9;

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
  
  const query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product LIMIT 12 OFFSET ($1)';
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
  const reqQuery = req.query;
  let query = '';
  let values: string[] | number[] = [];
  
  const bArray = JSON.parse(req.query.b as string);
  const cArray = JSON.parse(req.query.c as string);
  const pArray = JSON.parse(req.query.p as string);

  const b_FilterSelected   =  reqQuery.b?.length > 2 && reqQuery.c?.length === 2 && reqQuery.s === 'false'   && reqQuery.p?.length === 9;      
  const c_FilterSelected   =  reqQuery.c?.length > 2 && reqQuery.b?.length === 2 && reqQuery.s === 'false'   && reqQuery.p?.length === 9;
  const bc_FilterSelected  =  reqQuery.b?.length > 2 && reqQuery.c?.length > 2   && reqQuery.s === 'false'   && reqQuery.p?.length === 9;
  const s_FilterSelected   =  reqQuery.s === 'true'  && reqQuery.c?.length === 2 && reqQuery.b?.length === 2 && reqQuery.p?.length === 9;
  const sb_FilterSelected  =  reqQuery.s === 'true'  && reqQuery.b?.length > 2   && reqQuery.c?.length === 2 && reqQuery.p?.length === 9;
  const sc_FilterSelected  =  reqQuery.s === 'true'  && reqQuery.c?.length > 2   && reqQuery.b?.length === 2 && reqQuery.p?.length === 9;
  const sbc_FilterSelected =  reqQuery.s === 'true'  && reqQuery.b?.length > 2   && reqQuery.c?.length > 2   && reqQuery.p?.length === 9;
  const p_FilterSelected   =  reqQuery.p?.length > 9 && reqQuery.c?.length === 2 && reqQuery.b?.length === 2 && reqQuery.s === 'false';
  const pb_FilterSelected  =  reqQuery.p?.length > 9 && reqQuery.c?.length === 2 && reqQuery.b?.length > 2   && reqQuery.s === 'false';
  const pc_FilterSelected  =  reqQuery.p?.length > 9 && reqQuery.c?.length > 2   && reqQuery.b?.length === 2 && reqQuery.s === 'false';
  const ps_FilterSelected  =  reqQuery.p?.length > 9 && reqQuery.c?.length === 2 && reqQuery.b?.length === 2 && reqQuery.s === 'true';
  const pbc_FilterSelected =  reqQuery.p?.length > 9 && reqQuery.c?.length > 2   && reqQuery.b?.length > 2   && reqQuery.s === 'false';
  const pbs_FilterSelected =  reqQuery.p?.length > 9 && reqQuery.c?.length === 2 && reqQuery.b?.length > 2   && reqQuery.s === 'true';
  const psc_FilterSelected =  reqQuery.p?.length > 9 && reqQuery.c?.length > 2   && reqQuery.b?.length === 2 && reqQuery.s === 'true';
  const all_FilterSelected =  reqQuery.p?.length > 9 && reqQuery.c?.length > 2   && reqQuery.b?.length > 2   && reqQuery.s === 'true';

  if (b_FilterSelected) {
    // console.log('Filtro B');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE brand = ANY ($1)';
    values = [bArray];

  } else if (c_FilterSelected) {
    // console.log('Filtro C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE category = ANY ($1)';
    values = [cArray];

  } else if (bc_FilterSelected) {
    // console.log('Filtro B y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE category = ANY ($1) AND brand = ANY ($2)';
    values = [cArray, bArray];

  } else if (s_FilterSelected) {
    // console.log('Filtro S');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE stock > 0';
    
  } else if (sb_FilterSelected) {
    // console.log('Filtro S y B');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE brand = ANY ($1) AND stock > 0';
    values = [bArray];
  }

  else if (sc_FilterSelected) {
    // console.log('Filtro S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE category = ANY ($1) AND stock > 0';
    values = [cArray];
  }

  else if (sbc_FilterSelected) {
    // console.log('Filtro S y B y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE category = ANY ($1) AND brand = ANY ($2) AND stock > 0';
    values = [cArray, bArray];
  }

  else if (p_FilterSelected) {
    // console.log('Filtro P');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE discount_price BETWEEN ($1) AND ($2)';
    values = [Number(pArray[0]), Number(pArray[1])];
  }

  else if (pb_FilterSelected) {
    // console.log('Filtro P y B');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE brand = ANY ($3) AND discount_price BETWEEN ($1) AND ($2)';
    values = [Number(pArray[0]), Number(pArray[1]), bArray];
  }

  else if (pc_FilterSelected) {
    // console.log('Filtro P y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE category = ANY ($3) AND discount_price BETWEEN ($1) AND ($2)';
    values = [Number(pArray[0]), Number(pArray[1]), cArray];
  }

  else if (ps_FilterSelected) {
    // console.log('Filtro P y S');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE stock > 0 AND discount_price BETWEEN ($1) AND ($2)';
    values = [Number(pArray[0]), Number(pArray[1])];
  }

  else if (pbc_FilterSelected) {
    // console.log('Filtro P y B y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE category = ANY ($1) AND brand = ANY ($2) AND discount_price BETWEEN ($3) AND ($4)';
    values = [cArray, bArray, Number(pArray[0]), Number(pArray[1])];
  }

  else if (pbs_FilterSelected) {
    // console.log('Filtro P y B y S');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE brand = ANY ($3) AND stock > 0 AND discount_price BETWEEN ($1) AND ($2)';
    values = [Number(pArray[0]), Number(pArray[1]), bArray];
  }

  else if (psc_FilterSelected) {
    // console.log('Filtro P y S y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE stock > 0 AND category = ANY ($3) AND discount_price BETWEEN ($1) AND ($2)';
    values = [Number(pArray[0]), Number(pArray[1]), cArray];
  }

  else if (all_FilterSelected) {
    // console.log('Filtro S y B y C');
    query = 'SELECT id, title, price, discount_price, stock, brand, category, image_urls[1] FROM product WHERE stock > 0 AND category = ANY ($1) AND brand = ANY ($2) AND discount_price BETWEEN ($3) AND ($4)';
    values = [Number(pArray[0]), Number(pArray[1]), cArray, bArray];
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
