import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Cookies from 'js-cookie';

import { CheckoutLayout } from 'components/layouts';
import { CheckoutShippingForm } from 'components/ui';

const CheckoutPage: NextPage = () => {
  return (
    <CheckoutLayout title="Checkout">
      <CheckoutShippingForm />
    </CheckoutLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
  const cartCookie = JSON.parse(req.cookies.CART) || [];
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin?p=/checkout',
        permanent: false
      }
    };
  }

  if (cartCookie.length === 0) {
    return {
      redirect: {
        destination: '/products',
        permanent: false
      }
    };
  }

  return {
    props: { }
  };
};

export default CheckoutPage;

