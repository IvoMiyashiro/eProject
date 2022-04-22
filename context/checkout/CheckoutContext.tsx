import { createContext } from 'react';

interface ContextProps {
  step: 1 | 2 | 3;
}

export const CheckoutContext = createContext({} as ContextProps);
