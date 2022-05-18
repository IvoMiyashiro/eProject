
interface Response {
  ok: boolean;
  rating: string;
  totalLength: string;
}

export const getRating = async (id: string) => {
  
  const resp = await fetch(`/api/products/${id}/rating`);
  const { ok, rating, totalLength }: Response = await resp.json();

  // if (!ok) return undefined;

  return {
    rating,
    totalLength
  };
};
