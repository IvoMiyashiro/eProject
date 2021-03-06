import { ParsedUrlQuery } from 'querystring';
import { Filters } from 'context';
import { IProduct } from 'interfaces';

interface Response {
  ok: boolean;
  products: IProduct[];
}

export const getProducts = async (offset: number, filters: Filters | ParsedUrlQuery = {}): Promise<IProduct[]> => {

  const { brands, categories, stock, price, search } = filters;
  const DEFAULT_LIMIT = 12;

  const hasSearchQuery = search !== '' && search !== undefined;
  const hasBrandsQuery = brands !== [] && brands !== undefined;
  const hasStockQuery = stock !== false && stock !== undefined;
  const hasCategoriesQuery = categories !== [] && categories !== undefined;
  const hasPriceQuery = price !== [] && price !== undefined;

  const encodeBrands     = encodeURIComponent(JSON.stringify(brands));
  const encodeCategories = encodeURIComponent(JSON.stringify(categories));
  const encodeStock      = encodeURIComponent(JSON.stringify(stock));
  const encodePrice      = encodeURIComponent(JSON.stringify(price));
  const encodeSearch     = encodeURIComponent(JSON.stringify(search));

  const resp = await fetch(`/api/products?limit=${DEFAULT_LIMIT}&offset=${offset}${hasCategoriesQuery ? '&categories=' + encodeCategories : ''}${hasBrandsQuery ? '&brands=' + encodeBrands : ''}${hasStockQuery ? '&stock=' + encodeStock : ''}${hasPriceQuery ? '&price=' + encodePrice : ''}${hasSearchQuery ? '&search=' + encodeSearch : ''}`);
  const { ok, products }: Response = await resp.json();

  if (!ok) return [];

  return products;
};
