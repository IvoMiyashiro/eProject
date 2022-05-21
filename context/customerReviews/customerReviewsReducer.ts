import { IReviews } from 'interfaces';
import { CustomerReviewsState } from './CustomerReviewsProvider';

type CustomerReviewsActionType = 
   | { type: '[REVIEWS] - Load reviews', payload: {reviews: IReviews[], totalLength: number} }
   | { type: '[REVIEWS] - Change limit per page', payload: number }
   | { type: '[REVIEWS] - Change offset', payload: number }

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
  
  default:
    return state;
  }

};
