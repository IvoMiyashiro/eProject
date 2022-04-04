import { useContext } from 'react';
import Link from 'next/link';

import { CartContext, UiContext } from 'context';
import { ArrowRightIcon } from 'components/icons';

import { Aside, Button, EmptyCart, H2, H3, Header, P, Span } from './styles';
import { ProductList } from './ProductList';

interface Props {
  isMenuOpen: boolean;
}

export const AsideCartMenu = ({ isMenuOpen }: Props) => {

  const { toggleCartMenu } = useContext(UiContext);
  const { cart } = useContext(CartContext);

  return (
    <Aside isOpen={ isMenuOpen }>
      <Header>
        <H2>Shopping Cart</H2>
        <Span onClick={toggleCartMenu}>&times;</Span>
      </Header>
      {
        cart.length !== 0
          ? <ProductList cart={ cart } />
          : (
            <EmptyCart>
              <H3>Your cart is empty!</H3>
              <P>We have the best products and sales for you to enjoy.</P>
              <Button onClick={toggleCartMenu}>
                  Explore
                <ArrowRightIcon width="18px" height="16px" />
              </Button>
            </EmptyCart>
          )
      }
    </Aside>
  );
};
