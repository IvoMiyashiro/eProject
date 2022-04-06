import { BrandList } from 'interfaces';

interface Response {
  ok: boolean;
  brands: {brand_name: BrandList}[]
}

export const getBrands = async () => {
  
  const resp = await fetch('/api/brands');
  const { ok, brands }: Response = await resp.json();

  if (!ok) return [];

  return brands;
};
