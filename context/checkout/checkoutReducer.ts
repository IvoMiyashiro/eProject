import { CheckoutState } from '.';
import { Address } from 'interfaces';

type CheckoutActionType = 
  | { type: '[CHECKOUT] - Pick Up' }
  | { type: '[CHECKOUT] - Delivery' }
  | { type: '[CHECKOUT] - Load Address', payload: Address }
  | { type: '[CHECKOUT] - Reset' }


export const checkoutReducer = (state: CheckoutState, action: CheckoutActionType): CheckoutState => {

  switch (action.type) {

  case '[CHECKOUT] - Pick Up':
    return {
      ...state,
      shippingMethod: 'pick up'
    };

  case '[CHECKOUT] - Delivery':
    return {
      ...state,
      shippingMethod: 'delivery'
    };

  case '[CHECKOUT] - Load Address':
    return {
      ...state,
      address: action.payload
    };

  case '[CHECKOUT] - Reset':
    return {
      ...state,
      shippingMethod: undefined,
      address: undefined
    };

  default:
    return state;
  }
};
