import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { getSession } from 'next-auth/react';

import { SignupForm } from 'components/ui';

const SignupPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>eProject | Signin</title>
      </Head>

      <Div>
        <SignupForm />
      </Div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
  const session = await getSession({ req });
  const { p = '/' } = query;

  if (session) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false
      }
    };
  }

  return {
    props: { }
  };
};

export default SignupPage;

const Div = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color_neutral_1};
  display: flex;
  min-height: 100vh;
  justify-content: center;
  width: 100%;
  padding: 4em;
`;
