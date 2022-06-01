import { createContext } from 'react';
import { IReviews } from 'interfaces';

interface ContextProps {
  reviewsList: IReviews[];
  totalReviewsLength: number;
  isLoading: boolean;
  offset: number;
  limitPerPage: number;
  orderBy: any;

  //Methods
  deleteReview: (customer_id: string, product_id: string, review_id: string) => Promise<void>
  changeLimitPerPage: (value: number) => void;
  changeOffset: (value: number) => void;
}

export const CustomerReviewsContext = createContext({} as ContextProps);
