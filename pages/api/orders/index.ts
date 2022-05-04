import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { ok: boolean, message?: string, order?: any }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch( req.method ) {
  case 'POST':
    return;
  
  case 'PUT':
    return updateOrder(req, res);

  default:
    return res.status(400).json({
      ok: false,
      message: 'Bad request'
    });
  }
};

const updateOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  
};
