import { createContext } from 'react';
import { IAddress } from 'interfaces';

interface ContextProps {
  shippingMethod: 'delivery' | 'pick up' | '' | undefined;
  address: IAddress | undefined;

  //Methods
  setShippingMethod: (method: string) => void;
  setAddressInfo: (data: IAddress) => void;
  resetCheckout: () => void;
}

export const CheckoutContext = createContext({} as ContextProps);
