import { IReviews } from 'interfaces';

interface Response {
  ok: boolean;
  reviews: IReviews[];
}

export const getProductReviews = async (product_id: string): Promise<IReviews[] | []> => {

  const resp = await fetch(`${process.env.BASE_URL}/api/products/${product_id}/reviews`);

  const { ok, reviews }: Response = await resp.json();

  if (!ok) return [];

  return reviews;
};
