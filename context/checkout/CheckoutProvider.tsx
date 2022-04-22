import { FC, useReducer } from 'react';

import { CheckoutContext, checkoutReducer } from './';

export interface CheckoutState { 
  step: 1 | 2 | 3;
}

const CART_INIT_STATE: CheckoutState = { 
  step: 1
};

export const CartProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(checkoutReducer, CART_INIT_STATE);

  return (
    <CheckoutContext.Provider value={{
      ...state,

      // Methods
    }}>
      { children }
    </CheckoutContext.Provider>
  );
};
