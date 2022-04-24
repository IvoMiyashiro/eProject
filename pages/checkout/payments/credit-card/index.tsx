import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

import { CheckoutLayout } from 'components/layouts';
import { CheckoutCreditCardForm } from 'components/ui';

const PaymentsCreditCardPage: NextPage = () => {
  return (
    <CheckoutLayout title="Payments">
      <CheckoutCreditCardForm />
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

export default PaymentsCreditCardPage;
