import { useEffect, useState } from 'react';
import { getRating } from 'services';

interface Response {
  rating: number | undefined;
  totalLength: number | undefined;
}

export const useRating = (id: string): Response => {
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [totalLength, setTotalLength] = useState<number | undefined>(undefined);

  useEffect(() => {
    getRating(id)
      .then(({ rating, totalLength }) => {
        setRating(Number(rating));
        setTotalLength(Number(totalLength));
      });
  }, [id]);

  if (!!rating) return {
    rating: Number(Number(rating).toFixed(2)),
    totalLength
  };
  
  return {
    rating,
    totalLength
  };
};
