import { useContext, useEffect, useState } from 'react';
import { IReviews } from 'interfaces';
import { AuthContext } from 'context';

interface Return {
  reviews: IReviews[] | [];
  totalReviews: number;
  isLoading: boolean;
}

export const useCustomerReviews = (orderBy: any, limit: number = 5,offset: number = 0): Return => {

  const { customer } = useContext(AuthContext);
  const [reviews, setReviews] = useState(null);
  const [totalReviews, setTotalReviews] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/customer/${customer?.id}/reviews?orderBy=${orderBy}&offset=${offset}&limit=${limit}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
    ) .then(resp => resp.json())
      .then(({ reviews, totalLength }) => {
        setReviews(reviews);
        setTotalReviews(totalLength);
        setLoading(false);
      });
  }, [customer?.id, offset, limit, orderBy]);
  
  return {
    reviews: reviews ? reviews : [],
    totalReviews,
    isLoading
  };
};
