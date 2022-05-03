import { useContext, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';

import { CartContext, CheckoutContext } from 'context';
import { Navbar, ProductCheckoutCard, Spinner } from 'components/ui';
import { lightTheme } from 'styles';
import { Li, P, H3 } from 'components/ui/Cart/AsideCartMenu/ProductList/styles';

interface Props {
  children: ReactNode;
  title: string;
}

export const CheckoutLayout = ({ children, title }: Props) => {

  const { cart, orderPrice, orderDiscount, orderTotalPrice } = useContext(CartContext);
  const { shippingMethod } = useContext(CheckoutContext);
  const router = useRouter();
  const pathname = router.pathname;
  const is_shipping_method_selected = shippingMethod !== '' && shippingMethod !== undefined;
  const is_invalid_pathname_without_shipping_method = pathname === '/checkout/address' || pathname === '/checkout/payments' || pathname === '/checkout/payments/credit-card';

  useEffect(() => {
    if (!is_shipping_method_selected && is_invalid_pathname_without_shipping_method) {
      router.push('/checkout');
    }
  }, [is_shipping_method_selected, is_invalid_pathname_without_shipping_method, router]);

  return (
    <>
      <Head>
        <title>eProject | {title}</title>
      </Head>
  
      <Navbar justLogo={true} />
      <Div>
        <Section>
          <Wrapper>
            {
              pathname === '/checkout'
                ? children
                : is_shipping_method_selected
                  ? children
                  : <Spinner color={lightTheme.color_primary_0}/>
            }
          </Wrapper>
          <Info>
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
          </Info>
        </Section>
      </Div>
    </>
  );
};

const Div = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-top: -72px;
`;

const Section = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2em;
  display: grid;
  grid-template-columns: 1fr minmax(400px, 500px);
  gap: 2em;
`;

const Info = styled.div`
  height: 100vh;
  width: 400px;
  background-color: ${prosp => prosp.theme.color_neutral_1};
  padding: 0 1.5em;
  padding-top: 7em;
  padding-bottom: 2em;
`;

const Wrapper = styled.div`
  padding-top: 7em;
  padding-bottom: 2em;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const PriceWrapper = styled.div`
  margin-top: 2em;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
`;
