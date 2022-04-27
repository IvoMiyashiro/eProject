import { FC, useReducer } from 'react';

import { CheckoutContext, checkoutReducer } from './';

export interface CheckoutState { 
  step: 1 | 2 | 3;
}

const CHECKOUT_INIT_STATE: CheckoutState = { 
  step: 1
};

export const CheckoutProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(checkoutReducer, CHECKOUT_INIT_STATE);

  return (
    <CheckoutContext.Provider value={{
      ...state,
 
      // Methods
    }}>
      { children }
    </CheckoutContext.Provider>
  );
};
