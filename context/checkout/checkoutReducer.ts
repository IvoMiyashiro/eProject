import { CheckoutState } from '.';

type CheckoutActionType = 
  | { type: '[UI] - ToggleMenu' }
  | { type: '[UI] - ToggleCartMenu' }
  | { type: '[UI] - Close Menu' }


export const checkoutReducer = (state: CheckoutState, action: CheckoutActionType): CheckoutState => {

  switch (action.type) {



  default:
    return state;
  }
};
