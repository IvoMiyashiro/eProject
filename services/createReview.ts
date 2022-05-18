import { IReviews } from 'interfaces';

interface Response { ok: boolean; review: IReviews; message: string;}

export const createReview = async (
  product_id: string,
  customer_id: string,
  rating: number,
  pros: string,
  cons: string,
  overall: string
) => {

  const resp = await fetch(`/api/products/${product_id}/reviews`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ customer_id, rating, pros, cons, overall }),
  });

  const { ok, review, message }: Response = await resp.json();

  if (!ok) return { message };

  return { review };
};
