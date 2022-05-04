import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

const CheckoutSuccess: NextPage = () => {
  return (
    <>
      hola  
    </>
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

export default CheckoutSuccess;
