import { useEffect, useState, useContext } from 'react';
import { IReviews, ICreateReviewData } from 'interfaces';
import { createReview, deleteReview as deleteDBReview } from 'services';
import { AuthContext } from 'context';

interface Return {
  reviews: IReviews[] | [];
  totalReviews: number;
  isLoading: boolean;
  addReview: (reviewData: ICreateReviewData) => Promise<void>;
  deleteReview: (deleteData: IDeleteReview) => Promise<void>;
}

interface IDeleteReview {
  product_id: string;
  review_id: string;
}

export const useReviews = (product_id: string, limit: number = 5,offset: number = 0): Return => {
  
  const { customer } = useContext(AuthContext);
  const [reviews, setReviews] = useState<IReviews[] | []>([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products/${product_id}/reviews?offset=${offset}&limit=${limit}`)
      .then(resp => resp.json())
      .then(({ reviews, totalLength }) => {
        setReviews(reviews);
        setTotalReviews(totalLength);
        setLoading(false);
      });
  }, [product_id, offset, limit]);

  const addReview = async ({ product_id, customer_id, rating, pros, cons, overall }: ICreateReviewData) => {
    const { review } = await createReview(
      product_id,
      customer_id,
      rating,
      pros,
      cons,
      overall
    );
    const newReview = {
      ...review!,
      name: customer?.name,
      profile_image: customer?.profile_image
    };
    setReviews(prev => [newReview!, ...prev]);
  };

  const deleteReview = async ({ product_id, review_id }: IDeleteReview) => {
    await deleteDBReview(product_id, review_id);
    setReviews(prev => {
      return prev.filter(review => {
        if (review.id !== review_id) return review;
      });
    });
  };
  
  return {
    reviews,
    totalReviews,
    isLoading,
    addReview,
    deleteReview
  };
};
