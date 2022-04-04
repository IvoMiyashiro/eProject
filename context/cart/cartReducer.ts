import { IProductCart } from 'interfaces';
import { CartState } from './';

type CartActionType =
  | { type: '[CART] - LOAD FROM COOKIES', payload: IProductCart[] }
  | { type: '[CART] - ADD TO CART', payload: IProductCart }
  | { type: '[CART] - REMOVE FROM CART', payload: IProductCart[] }
  | { type: '[CART] - UPDATE PRODUCT CART QUANTITY', payload: IProductCart[] }
  | { 
      type: '[CART] - UPDATE ORDER SUMMARY',
      payload: {
        orderPrice: number;
        orderDiscount: number;
        orderTotalPrice: number;
      }
    }
;

export const cartReducer = (state: CartState, action: CartActionType): CartState => {

  switch (action.type) {

  case '[CART] - LOAD FROM COOKIES':
    return {
      ...state,
      cart: action.payload
    };

  case '[CART] - ADD TO CART':
    return {
      ...state,
      cart: [
        ...state.cart,
        action.payload
      ]
    };
  
  case '[CART] - REMOVE FROM CART':
    return {
      ...state,
      cart: action.payload
    };

  case '[CART] - UPDATE PRODUCT CART QUANTITY':
    return {
      ...state,
      cart: action.payload
    };
  
  case '[CART] - UPDATE ORDER SUMMARY':
    return {
      ...state,
      ...action.payload
    };

  default:
    return state;
  }
};
