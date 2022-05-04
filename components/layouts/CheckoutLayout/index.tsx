import { useContext, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { CheckoutContext } from 'context';
import { Navbar, Spinner } from 'components/ui';
import { AsideInfo } from './AsideInfo';

import { Div, Section, Wrapper } from './styles';
import { lightTheme } from 'styles';

interface Props {
  children: ReactNode;
  title: string;
}

export const CheckoutLayout = ({ children, title }: Props) => {

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
          <AsideInfo />
        </Section>
      </Div>
    </>
  );
};
