import { createContext } from 'react';
import { IProduct, IProductCart } from 'interfaces';

interface ContextProps {
  cart: IProductCart[];
  orderPrice: number;
  orderDiscount: number;
  orderTotalPrice: number;

  //Methods
  addToCart: (product: IProductCart) => void;
  removeFromCart: (id: string) => void;
  updateProductQuantity: (product: IProductCart) => void;
}

export const CartContext = createContext({} as ContextProps);
