import { IReviews } from 'interfaces';

interface Response { ok: boolean; review: IReviews; message: string;}

export const deleteReview = async (product_id: string, review_id: string) => {

  const resp = await fetch(`/api/products/${product_id}/reviews`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({review_id})
  });
  const { ok, message }: Response = await resp.json();

  if (!ok) return { message };
};
