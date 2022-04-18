import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { SigninForm } from 'components/ui/SinginForm';

const SigninPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>eProject | Signin</title>
      </Head>

      <Div>
        <SigninForm />
      </Div>
    </>
  );
};

export default SigninPage;

export const Div = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color_neutral_1};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;
