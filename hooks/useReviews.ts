import { useEffect, useState } from 'react';
import { IReviews } from 'interfaces';

interface Return {
  reviews: IReviews[] | [];
  totalReviews: number;
  isLoading: boolean;
}

export const useReviews = (product_id: string, limit: number = 5,offset: number = 0): Return => {
  const [reviews, setReviews] = useState(null);
  const [totalReviews, setTotalReviews] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.BASE_URL}/api/products/${product_id}/reviews?offset=${offset}&limit=${limit}`)
      .then(resp => resp.json())
      .then(({ reviews, totalLength }) => {
        setReviews(reviews);
        setTotalReviews(totalLength);
        setLoading(false);
      });
  }, [product_id, offset, limit]);
  
  return {
    reviews: reviews ? reviews : [],
    totalReviews,
    isLoading
  };
};
