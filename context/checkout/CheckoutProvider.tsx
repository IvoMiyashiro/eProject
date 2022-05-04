import { FC, useEffect, useReducer } from 'react';

import { Address } from 'interfaces';
import { CheckoutContext, checkoutReducer } from './';
import { useRouter } from 'next/router';

export interface CheckoutState { 
  shippingMethod: 'delivery' | 'pick up' | '' | undefined;
  address: Address | undefined
}

const CHECKOUT_INIT_STATE: CheckoutState = { 
  shippingMethod: undefined,
  address: undefined
};

export const CheckoutProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(checkoutReducer, CHECKOUT_INIT_STATE);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/checkout') {
      return resetCheckout();
    }
  }, [router.pathname]);

  const setShippingMethod = (method: string) => {
    if (method === 'delivery') {
      return dispatch({ type: '[CHECKOUT] - Delivery' });
    }

    if (method === 'pick up') {
      return dispatch({ type: '[CHECKOUT] - Pick Up' });
    }
  };

  const setAddressInfo = (data: Address) => {
    dispatch({ type: '[CHECKOUT] - Load Address', payload: data });
  };

  const resetCheckout = () => {
    dispatch({ type: '[CHECKOUT] - Reset' });
  };

  return (
    <CheckoutContext.Provider value={{
      ...state,
 
      // Methods
      setShippingMethod,
      setAddressInfo,
      resetCheckout
    }}>
      { children }
    </CheckoutContext.Provider>
  );
};
