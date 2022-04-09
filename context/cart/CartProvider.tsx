import { FC, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';

import { IProductCart } from 'interfaces';
import { cartReducer, CartContext } from './';

export interface CartState { 
  cart: IProductCart[];
  orderPrice: number;
  orderDiscount: number;
  orderTotalPrice: number;
}

const CART_INIT_STATE: CartState = { 
  cart: [],
  orderPrice: 0,
  orderDiscount: 0,
  orderTotalPrice: 0,
};

export const CartProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, CART_INIT_STATE);

  useEffect(() => {
    try {
      const cookieProduct = Cookies.get('CART') ? JSON.parse(Cookies.get('CART')!) : [];
      dispatch({
        type: '[CART] - LOAD FROM COOKIES', 
        payload: cookieProduct
      });
    } catch (error) {
      dispatch({ 
        type: '[CART] - LOAD FROM COOKIES', 
        payload: []
      });
    }
  },[]);

  useEffect(() => {
    Cookies.set('CART', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    const orderPrice    = state.cart.reduce((prev, current) => (current.price * current.quantity) + prev, 0);
    const orderDiscount = state.cart.reduce((prev, current) => ((current.price - current.discount_price) * current.quantity) + prev, 0);
    const orderTotalPrice = state.cart.reduce((prev, current) => (current.discount_price * current.quantity) + prev, 0);

    const orderSummary = {
      orderPrice,
      orderDiscount,
      orderTotalPrice,
    };

    dispatch({ type: '[CART] - UPDATE ORDER SUMMARY', payload: orderSummary });
  }, [state.cart]);

  const addToCart = (product: IProductCart) => {
    let productToAdd = product;
    let isInCart = false;

    state.cart.map(cartProduct => {
      if (cartProduct.id === product.id) {
        isInCart = true;
        productToAdd = {
          ...product,
          quantity: cartProduct.quantity + 1
        };
      }
    });

    if (isInCart) {
      const newCartArr = state.cart.map(cartProduct => {
        if (cartProduct.id !== product.id) return cartProduct;
  
        return productToAdd;
      });
      console.log(newCartArr);
      dispatch({ type: '[CART] - UPDATE PRODUCT CART QUANTITY', payload: newCartArr });
    } else {
      dispatch({ type: '[CART] - ADD TO CART', payload: productToAdd });
    }
  };

  const removeFromCart = (id: string) => {
    const newCartArr = state.cart.filter(product => {
      if (product.id !== id) return product;
    });

    dispatch({ type: '[CART] - REMOVE FROM CART', payload: newCartArr });
  };

  const updateProductQuantity = (product: IProductCart) => {
    const newCartArr = state.cart.map(cartProduct => {
      if (cartProduct.id !== product.id) return cartProduct;

      return product;
    });

    dispatch({ type: '[CART] - UPDATE PRODUCT CART QUANTITY', payload: newCartArr });
  };

  return (
    <CartContext.Provider value={{
      ...state,

      // Methods
      addToCart,
      removeFromCart,
      updateProductQuantity
    }}>
      { children }
    </CartContext.Provider>
  );
};
