import { IGpuSpects } from 'interfaces/specs';

interface Response {
  ok: boolean;
  specs: IGpuSpects[];
}

export const getProductSpecs = async (product_id: string): Promise<IGpuSpects[] | []> => {

  const resp = await fetch(`${process.env.BASE_URL}/api/products/${product_id}/specs`);

  const { ok, specs }: Response = await resp.json();

  if (!ok) return [];

  return specs;
};
