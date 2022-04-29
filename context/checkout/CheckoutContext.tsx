import { createContext } from 'react';
import { Address } from 'interfaces';

interface ContextProps {
  shippingMethod: 'delivery' | 'pick up' | '' | undefined;
  address: Address | undefined;

  //Methods
  setShippingMethod: (method: string) => void;
  setAddressInfo: (data: Address) => void;
}

export const CheckoutContext = createContext({} as ContextProps);
