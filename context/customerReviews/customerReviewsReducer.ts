import { IReviews } from 'interfaces';
import { CustomerReviewsState } from './CustomerReviewsProvider';

type CustomerReviewsActionType = 
   | { type: '[REVIEWS] - Load reviews', payload: {reviews: IReviews[], totalLength: number} }
   | { type: '[REVIEWS] - Change limit per page', payload: number }
   | { type: '[REVIEWS] - Change offset', payload: number }
   | { type: '[REVIEWS] - Delete review', payload: string }

export const customerReviewsReducer = ( state: CustomerReviewsState, action: CustomerReviewsActionType ): CustomerReviewsState => {

  switch (action.type) {
  case '[REVIEWS] - Load reviews':
    return {
      ...state,
      reviewsList: action.payload.reviews,
      totalReviewsLength: action.payload.totalLength
    };

  case '[REVIEWS] - Change offset':
    return {
      ...state,
      offset: action.payload
    };

  case '[REVIEWS] - Change limit per page':
    return {
      ...state,
      limitPerPage: action.payload
    };

  case '[REVIEWS] - Delete review':
    return {
      ...state,
      reviewsList: state.reviewsList.filter(review => {
        if (review.id !== action.payload) return review;
      })
    };
  
  default:
    return state;
  }

};
