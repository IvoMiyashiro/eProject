import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'database';

type Data = { ok: boolean, message?: string, specs?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const query = req.query;
  
  switch( req.method ) {
  case 'GET':
    return getProductSpecs(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const getProductSpecs = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { id } = req.query;

  let query = 'SELECT category FROM product WHERE id = ($1)';
  const value = [id];

  try {
    const { rows: resp } = await db.conn.query(query, value);
    const tableToQuery = getTableToQuery(resp[0].category);
    
    query = `SELECT * FROM specs_${tableToQuery} WHERE product_id = ($1)`;
    const { rows } = await db.conn.query(query, value);
    console.log(query);
    return res.status(200).json({
      ok: true,
      specs: rows
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      message: 'Internal server error.'
    });
  }
};

const getTableToQuery = (value: string) => {
  switch (value) {
  case 'Video Cards':
    return 'gpu';
  
  case 'CPU / Processors':
    return 'cpu';
  
  case 'Motherboard':
    return 'motherboard';
  
  case 'Memory':
    return 'memory';
  
  case 'Case':
    return 'case';

  case 'Power Supply':
    return 'power_supply';

  case 'Storage':
    return 'storage';

  case 'CPU Cooler':
    return 'cpu_cooler';
  
  default:
    return '';
  }
};
