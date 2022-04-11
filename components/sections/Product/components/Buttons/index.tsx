import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { IProduct } from 'interfaces';
import { CartContext } from 'context';
import { Button } from 'components/ui';

import { lightTheme } from 'styles';

interface Props {
  product: IProduct
}

export const Buttons = ({ product }: Props) => {

  const { cart, addToCart } = useContext(CartContext);
  const [isInCart, setInCart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState('0');

  useEffect(() => {
    const isInCart = cart.some(p => p.id === product.id);
    setInCart(isInCart);
  },[cart, product.id]);

  useEffect(() => {
    cart.map(p => {
      if (p.id === product.id) {
        if (p.quantity > 9) {
          return setCartQuantity('+9');
        }
        return setCartQuantity(p.quantity.toString());
      }
    });
  }, [cart, product.id]);

  const addProduct = () => {
    const productToAdd = { ...product, quantity: 1 };
    addToCart(productToAdd);
  };

  return (
    <ButtonsWrapper>
      <ButtonWrapper>
        <Button
          bgColor={lightTheme.color_primary_0}
          textColor={lightTheme.color_ui_text_contrast}
          fontSize="1rem"
          bRadius='4px'
        >
          Buy now
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          bgColor={lightTheme.color_neutral_0}
          textColor={lightTheme.color_ui_text_contrast}
          fontSize="1rem"
          bRadius='4px'
          onClick={addProduct}
        >
          {
            isInCart
              ? 'Product in cart'
              : 'Add to cart'
          }
        </Button>
        {
          (cartQuantity !== '0' && isInCart)
          &&
          <Div>
            { cartQuantity }
          </Div>
        }
      </ButtonWrapper>
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2em;
  margin-top: 1em;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 45px;
  position: relative;
`;

const Div = styled.div`
  padding: 0.25em 0.5em;
  position: absolute;
  top: -10px;
  right: 0;
  background-color: ${props => props.theme.color_tertiary_0};
  border-radius: 50%;
  font-size: 0.8rem;
`;
