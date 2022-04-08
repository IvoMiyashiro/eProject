import { IProduct } from 'interfaces';

interface Response {
  ok: boolean;
  product: IProduct[]
}

export const getProductById = async (id: string): Promise<IProduct[]> => {

  const resp = await fetch(`${process.env.BASE_URL}/api/product?id=${id}`);
  const { ok, product }: Response = await resp.json();

  if (!ok) return [];

  return product;
};
