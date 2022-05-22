import { FC, useContext, useEffect, useReducer, useState } from 'react';
import { IReviews } from 'interfaces';
import { deleteReview as deleteDBReview } from 'services';
import { AuthContext } from 'context';
import { customerReviewsReducer, CustomerReviewsContext } from './';

export interface CustomerReviewsState {
  reviewsList: IReviews[];
  totalReviewsLength: number;
  limitPerPage: number;
  offset: number;
  orderBy: undefined;
}

const CUSTOMER_REVIEWS_INITIAL_STATE: CustomerReviewsState = {
  reviewsList: [],
  totalReviewsLength: 0,
  limitPerPage: 10,
  offset: 0,
  orderBy: undefined
};

export const CutomerReviewsProvider:FC = ({ children }) => {

  const { customer } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(true);
  const [state, dispatch] = useReducer( customerReviewsReducer, CUSTOMER_REVIEWS_INITIAL_STATE );
  const { limitPerPage, offset, orderBy } = CUSTOMER_REVIEWS_INITIAL_STATE;

  useEffect(() => {
    if (!!customer) {
      loadReviews(customer!.id, orderBy, offset, limitPerPage);
    }
  }, [customer, orderBy, offset, limitPerPage]);

  const loadReviews = async (customer_id: string, orderBy: any, offset: number, limit: number) => {
    setLoading(true);
    await fetch(`/api/customer/${customer_id}/reviews?orderBy=${orderBy}&offset=${offset}&limit=${limit}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
    ) .then(resp => resp.json())
      .then(({ reviews, totalLength }) => {
        dispatch({
          type: '[REVIEWS] - Load reviews',
          payload: {
            reviews,
            totalLength
          }
        });
        setLoading(false);
      });
  };

  const deleteReview = async (product_id: string, review_id: string) => {
    await deleteDBReview(product_id, review_id); 
    dispatch({
      type: '[REVIEWS] - Delete review',
      payload: review_id
    });
  };

  const changeLimitPerPage = (value: number) => {
    dispatch({ type: '[REVIEWS] - Change limit per page', payload: value });
  };

  const changeOffset = (value: number) => {
    dispatch({ type: '[REVIEWS] - Change offset', payload: value });
  };

  return (
    <CustomerReviewsContext.Provider value={{
      ...state,
      isLoading,

      // Methods
      deleteReview,
      changeLimitPerPage,
      changeOffset
    }}>
      { children }
    </CustomerReviewsContext.Provider>
  );
};
