import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

import { CheckoutLayout } from 'components/layouts';
import { CheckoutAddressForm } from 'components/ui';

const AddressPage: NextPage = () => {
  return (
    <CheckoutLayout title="Checkout">
      <CheckoutAddressForm />
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

export default AddressPage;
