import { IProduct } from 'interfaces';

interface Response {
  ok: boolean;
  products: IProduct[];
}

export const searchProduct = async (query: string): Promise<IProduct[] | []> => {

  const resp = await fetch(`${process.env.BASE_URL}/api/products/search?q=${query}`);

  const { ok, products }: Response = await resp.json();

  if (!ok) return [];

  return products;
};
