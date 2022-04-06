import { CategoryList, IProduct, BrandList } from 'interfaces';

interface Response {
  ok: boolean;
  products: IProduct[]
}

export const getProducts = async (
  offset: number = 0,
  categories: CategoryList[] = [],
  brands: BrandList[] = [],
  stock: boolean = false,
  price: number[] = []
): Promise<IProduct[]> => {
  
  const encodeBrands     = encodeURIComponent(JSON.stringify(brands));
  const encodeCategories = encodeURIComponent(JSON.stringify(categories));
  const encodeStock      = encodeURIComponent(JSON.stringify(stock));
  const encodePrice      = encodeURIComponent(JSON.stringify(price));

  const resp = await fetch(`/api/products?offset=${offset}&categories=${encodeCategories}&brands=${encodeBrands}&stock=${encodeStock}&price=${encodePrice}`);
  const { ok, products }: Response = await resp.json();

  if (!ok) return [];

  return products;
};
