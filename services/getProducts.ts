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
  price: [] = []
): Promise<IProduct[]> => {
  
  const resp = await fetch(`/api/products?offset=${offset}&categories=${categories}&brands=${brands}&stock=${stock}&price=${price}`);
  const { ok, products }: Response = await resp.json();

  if (!ok) return [];

  return products;
};
