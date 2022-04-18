import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

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

export default SignupPage;

export const Div = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color_neutral_1};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;
