import { useContext } from 'react';
import { useRouter } from 'next/router';

import { CartContext } from 'context';
import { ArrowRightIcon } from 'components/icons';
import { Button, ProductCheckoutCard } from 'components/ui';

import { Div, PriceWrapper, Ul, Li, P, H3, EmptyCart, ProductsWrapper, ButtonWrapper } from './styles';
import { lightTheme } from 'styles';


export const AsideInfo = () => {

  const { cart, orderPrice, orderDiscount, orderTotalPrice } = useContext(CartContext);
  const router = useRouter();

  return (
    <Div>
      {
        cart.length !== 0
          ? (
            <>
              <ProductsWrapper>
                {
                  cart.map(({ id, image_urls, title, discount_price, quantity }) => {
                    return ( 
                      <ProductCheckoutCard 
                        key={id}
                        id={id}
                        imageUrl={image_urls[0]}
                        title={title}
                        price={discount_price}
                        quantity={quantity}
                      />
                    );
                  })
                }
              </ProductsWrapper>
              <PriceWrapper>
                <Ul>
                  <Li>
                    <P>Order Price</P>
                    <P>$ { orderPrice }</P>
                  </Li>
                  <Li>
                    <P>Discount</P>
                    <P>-$ { orderDiscount }</P>
                  </Li>
                  <Li>
                    <H3>Total</H3>
                    <H3>$ { orderTotalPrice }</H3>
                  </Li>
                </Ul> 
              </PriceWrapper>
            </>
          )
          : (
            <EmptyCart>
              <H3>Oops, your cart is empty!</H3>
              <P>We have the best products and sales for you to enjoy.</P>
              <ButtonWrapper>
                <Button
                  bgColor={lightTheme.color_primary_0}
                  onClick={() => router.push('/products')}
                  fontSize="0.9rem"
                  bRadius='4px'
                  textColor={lightTheme.color_ui_text_contrast}
                >
                  Explore
                </Button>
              </ButtonWrapper>
            </EmptyCart>
          )
      }
    </Div>
  );
};
