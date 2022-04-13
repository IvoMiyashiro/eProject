import { ParsedUrlQuery } from 'querystring';
import { Filters } from 'context';
import { IProduct } from 'interfaces';

interface Response {
  ok: boolean;
  products: IProduct[];
}

export const getProducts = async (offset: number = 0, filters: Filters | ParsedUrlQuery = {}): Promise<IProduct[]> => {

  const { brands, categories, stock, price } = filters;

  const encodeBrands     = encodeURIComponent(JSON.stringify(brands));
  const encodeCategories = encodeURIComponent(JSON.stringify(categories));
  const encodeStock      = encodeURIComponent(JSON.stringify(stock));
  const encodePrice      = encodeURIComponent(JSON.stringify(price));

  const resp = await fetch(`${process.env.BASE_URL}/api/products?offset=${offset}&categories=${encodeCategories}&brands=${encodeBrands}&stock=${encodeStock}&price=${encodePrice}`);
  const { ok, products }: Response = await resp.json();

  if (!ok) return [];

  return products;
};
