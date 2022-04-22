import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

import { CheckoutLayout } from 'components/layouts';
import { ShippingForm } from 'components/ui';

const CheckoutPage: NextPage = () => {
  return (
    <CheckoutLayout title="Checkout">
      <ShippingForm />
    </CheckoutLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin?p=/checkout',
        permanent: false
      }
    };
  }

  return {
    props: { }
  };
};

export default CheckoutPage;

